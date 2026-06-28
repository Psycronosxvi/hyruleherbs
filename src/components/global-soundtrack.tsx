import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type Track = { src: string; label?: string };

type Props = {
  tracks: Track[];
  volume?: number; // 0..1
};

export function GlobalSoundtrack({ tracks, volume = 0.35 }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastIndexRef = useRef<number>(-1);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  // Pick a random track, avoiding an immediate repeat when more than one exists.
  function pickRandomTrack(): Track | null {
    if (tracks.length === 0) return null;
    if (tracks.length === 1) {
      lastIndexRef.current = 0;
      return tracks[0];
    }
    let idx = Math.floor(Math.random() * tracks.length);
    if (idx === lastIndexRef.current) idx = (idx + 1) % tracks.length;
    lastIndexRef.current = idx;
    return tracks[idx];
  }

  function playRandom() {
    const audio = audioRef.current;
    if (!audio) return;
    const track = pickRandomTrack();
    if (!track) return;
    audio.src = track.src;
    void audio
      .play()
      .then(() => setStarted(true))
      .catch(() => {
        // Autoplay blocked - will retry on the first user gesture.
      });
  }

  // Configure the element and try to autoplay on mount.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = false;

    const onEnded = () => playRandom();
    audio.addEventListener("ended", onEnded);

    // Attempt immediate autoplay when visitors arrive.
    playRandom();

    return () => {
      audio.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  // Fallback: browsers commonly block autoplay-with-sound until the visitor
  // interacts. Start on the first gesture if we haven't started yet.
  useEffect(() => {
    if (started) return;
    const onFirstGesture = () => {
      const audio = audioRef.current;
      if (audio && audio.paused) {
        if (!audio.src) {
          playRandom();
        } else {
          void audio.play().then(() => setStarted(true)).catch(() => undefined);
        }
      } else if (audio) {
        setStarted(true);
      }
      cleanup();
    };
    const cleanup = () => {
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
    };
    window.addEventListener("pointerdown", onFirstGesture);
    window.addEventListener("keydown", onFirstGesture);
    window.addEventListener("touchstart", onFirstGesture);
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    setMuted(next);
    // If audio never started (autoplay blocked), a click counts as a gesture.
    if (!next && audio.paused) {
      if (!audio.src) playRandom();
      else void audio.play().then(() => setStarted(true)).catch(() => undefined);
    }
  }

  if (tracks.length === 0) return null;

  return (
    <>
      <audio ref={audioRef} preload="auto" aria-hidden="true" style={{ display: "none" }} />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute soundtrack" : "Mute soundtrack"}
        title={muted ? "Unmute soundtrack" : "Mute soundtrack"}
        className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-forest/90 text-gold shadow-lg backdrop-blur transition hover:bg-forest"
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </>
  );
}
