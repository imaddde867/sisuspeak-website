-- Update RLS policies to allow inserts from both anon and authenticated roles

-- waitlist_signups
drop policy if exists "Allow insert to waitlist_signups" on public.waitlist_signups;
create policy "Allow insert to waitlist_signups" on public.waitlist_signups
  for insert to authenticated, anon
  with check (true);

-- contact_messages
drop policy if exists "Allow insert to contact_messages" on public.contact_messages;
create policy "Allow insert to contact_messages" on public.contact_messages
  for insert to authenticated, anon
  with check (true);

-- email_events
drop policy if exists "Allow insert to email_events" on public.email_events;
create policy "Allow insert to email_events" on public.email_events
  for insert to authenticated, anon
  with check (true);
