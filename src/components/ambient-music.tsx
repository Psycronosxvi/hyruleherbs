import { useEffect, useRef } from "react";

const NOTES = [261.63, 329.63, 392, 493.88, 587.33, 659.25];
const VOLUME = 0.24;

export function AmbientMusic() {
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const context = new AudioContext();
    const gain = context.createGain();

    function playNote(frequency: number, delay: number, length: number) {
      const oscillator = context.createOscillator();
      const noteGain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.detune.value = Math.random() * 8 - 4;
      noteGain.gain.setValueAtTime(0, context.currentTime + delay);
      noteGain.gain.linearRampToValueAtTime(0.12, context.currentTime + delay + 0.08);
      noteGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + delay + length);
      oscillator.connect(noteGain).connect(gain);
      oscillator.start(context.currentTime + delay);
      oscillator.stop(context.currentTime + delay + length + 0.1);
    }

    function playBloom() {
      const root = NOTES[Math.floor(Math.random() * NOTES.length)];
      playNote(root / 2, 0, 2.8);
      playNote(root, 0.18, 2.1);
      playNote(root * 1.5, 0.42, 1.6);
    }

    gain.gain.value = VOLUME;
    gain.connect(context.destination);
    audioRef.current = context;
    void context.resume().catch(() => undefined);
    playBloom();
    const interval = window.setInterval(playBloom, 4200);

    return () => {
      window.clearInterval(interval);
      void context.close();
      audioRef.current = null;
    };
  }, []);

  return <audio autoPlay loop muted={false} style={{ display: "none" }} aria-hidden="true" />;
}
