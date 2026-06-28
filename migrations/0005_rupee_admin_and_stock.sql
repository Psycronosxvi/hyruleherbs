alter table products add column if not exists stock integer not null default 100;

alter table products
  drop constraint if exists products_stock_check;

alter table products
  add constraint products_stock_check check (stock >= 0);

alter table referral_events
  drop constraint if exists referral_events_event_type_check;

alter table referral_events
  add constraint referral_events_event_type_check
  check (event_type in ('signup', 'purchase', 'admin_adjustment'));

alter table referral_events
  drop constraint if exists referral_events_referrer_id_referred_id_event_type_key;
