alter table products add column image_url text;

create table if not exists brand_assets (
  id integer primary key autoincrement,
  asset_key text not null unique,
  label text not null,
  image_url text not null,
  role text not null default 'brand',
  created_at text not null default (datetime('now')),
  updated_at text not null default (datetime('now'))
);

create table if not exists audio_settings (
  id integer primary key check (id = 1),
  enabled integer not null default 1,
  mode text not null default 'positive-mystic-chimes',
  volume real not null default 0.24,
  updated_at text not null default (datetime('now'))
);
