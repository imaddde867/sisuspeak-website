-- Required extension for gen_random_uuid
create extension if not exists pgcrypto;

-- Create waitlist_signups table
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null,
  page text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_signups_email_idx on public.waitlist_signups (lower(email));

-- Create contact_messages table
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  company text,
  phone text,
  source text,
  page text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Create email_events table (for logging fallback events)
create table if not exists public.email_events (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  email text not null,
  status text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.waitlist_signups enable row level security;
alter table public.contact_messages enable row level security;
alter table public.email_events enable row level security;

-- RLS policies: allow inserts to anon only; no select/update/delete policies defined
create policy "Allow insert to waitlist_signups" on public.waitlist_signups
  for insert to anon
  with check (true);

create policy "Allow insert to contact_messages" on public.contact_messages
  for insert to anon
  with check (true);

create policy "Allow insert to email_events" on public.email_events
  for insert to anon
  with check (true);

-- Optional tighter rule: disallow select/update/delete for anon by not creating policies for those actions
