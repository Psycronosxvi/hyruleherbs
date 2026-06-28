create table if not exists subscribers (
  id integer primary key autoincrement,
  email text not null unique,
  source text not null default 'site',
  status text not null default 'active',
  created_at text not null default (datetime('now')),
  updated_at text not null default (datetime('now'))
);

create table if not exists users (
  id integer primary key autoincrement,
  provider text not null,
  provider_id text not null,
  email text not null,
  name text,
  avatar_url text,
  created_at text not null default (datetime('now')),
  updated_at text not null default (datetime('now')),
  unique(provider, provider_id)
);

create table if not exists products (
  id integer primary key autoincrement,
  slug text not null unique,
  name text not null,
  category text not null,
  type text not null check (type in ('ingredient', 'blend', 'kit', 'book')),
  price_cents integer not null,
  short text not null,
  description text not null,
  image_key text,
  r2_object_key text,
  status text not null default 'active',
  created_at text not null default (datetime('now')),
  updated_at text not null default (datetime('now'))
);

create table if not exists product_notes (
  id integer primary key autoincrement,
  product_id integer not null references products(id) on delete cascade,
  note_type text not null default 'proof',
  body text not null,
  citation_url text,
  sort_order integer not null default 0
);

create table if not exists orders (
  id integer primary key autoincrement,
  user_email text,
  stripe_checkout_session_id text unique,
  status text not null default 'pending',
  subtotal_cents integer not null default 0,
  total_cents integer not null default 0,
  created_at text not null default (datetime('now')),
  updated_at text not null default (datetime('now'))
);

create table if not exists order_items (
  id integer primary key autoincrement,
  order_id integer not null references orders(id) on delete cascade,
  product_slug text not null,
  quantity integer not null,
  unit_price_cents integer not null
);
