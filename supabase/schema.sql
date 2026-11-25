-- Blog engagement: views, likes and comments.
-- Run once in the Supabase SQL editor. Safe to re-run.
-- RLS is on with no policies, so only the server (secret key) can read or write.

create table if not exists public.post_stats (
  slug text primary key,
  views integer not null default 0,
  likes integer not null default 0
);

create table if not exists public.comments (
  id bigint generated always as identity primary key,
  slug text not null,
  author_name text not null check (char_length(author_name) between 1 and 80),
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz not null default now()
);

create index if not exists comments_slug_created_at_idx on public.comments (slug, created_at desc);

alter table public.post_stats enable row level security;
alter table public.comments enable row level security;

create or replace function public.increment_post_stat(p_slug text, p_field text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_field = 'views' then
    insert into post_stats (slug, views) values (p_slug, 1)
    on conflict (slug) do update set views = post_stats.views + 1;
  elsif p_field = 'likes' then
    insert into post_stats (slug, likes) values (p_slug, 1)
    on conflict (slug) do update set likes = post_stats.likes + 1;
  else
    raise exception 'unknown field %', p_field;
  end if;
end;
$$;

revoke execute on function public.increment_post_stat(text, text) from public, anon, authenticated;
grant execute on function public.increment_post_stat(text, text) to service_role;

-- Carry over the counts and comment from the Wix blog.
insert into public.post_stats (slug, views) values
  ('fractional-cto-explained-maximizing-your-technology-strategy', 7),
  ('fractional-cto-for-pharma-cros', 14),
  ('similar-properties-of-ai-and-crypto-hypes', 51),
  ('s-p500-sectors-market-cap-analysis', 42)
on conflict (slug) do nothing;

insert into public.comments (slug, author_name, body, created_at)
select 's-p500-sectors-market-cap-analysis', 'Justina Simanaviciute', 'Interesting, thank you for sharing!', '2024-03-10T12:00:00Z'
where not exists (select 1 from public.comments where slug = 's-p500-sectors-market-cap-analysis' and author_name = 'Justina Simanaviciute');
