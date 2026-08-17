create extension if not exists pgcrypto;
create type task_priority as enum ('low','medium','high');
create type task_status as enum ('todo','in_progress','completed');
create type goal_horizon as enum ('short_term','long_term');
create type habit_cadence as enum ('daily','weekly');

create table public.profiles (id uuid primary key references auth.users(id) on delete cascade, full_name text, avatar_url text, created_at timestamptz default now());
create table public.categories (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, name text not null, color text not null default '#6366f1', created_at timestamptz default now(), unique(user_id,name));
create table public.goals (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, title text not null, description text, horizon goal_horizon not null default 'short_term', progress numeric not null default 0 check(progress between 0 and 100), target_date date, created_at timestamptz default now());
create table public.tasks (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, category_id uuid references public.categories(id) on delete set null, goal_id uuid references public.goals(id) on delete set null, title text not null, description text, priority task_priority not null default 'medium', status task_status not null default 'todo', due_at timestamptz, reminder_at timestamptz, position integer not null default 0, created_at timestamptz default now(), updated_at timestamptz default now());
create table public.habits (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, title text not null, cadence habit_cadence not null default 'daily', streak integer not null default 0, created_at timestamptz default now());
create table public.habit_completions (id uuid primary key default gen_random_uuid(), habit_id uuid not null references public.habits(id) on delete cascade, user_id uuid not null references auth.users(id) on delete cascade, completed_on date not null default current_date, unique(habit_id, completed_on));
create table public.note_folders (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, name text not null, created_at timestamptz default now());
create table public.notes (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, folder_id uuid references public.note_folders(id) on delete set null, title text not null, content text not null default '', pinned boolean not null default false, created_at timestamptz default now(), updated_at timestamptz default now());
create table public.activity_logs (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, entity_type text not null, entity_id uuid, action text not null, metadata jsonb not null default '{}', created_at timestamptz default now());

create index tasks_user_due_idx on public.tasks(user_id, due_at);
create index tasks_user_status_idx on public.tasks(user_id, status);
create index notes_search_idx on public.notes using gin(to_tsvector('english', title || ' ' || content));

alter table public.profiles enable row level security; alter table public.categories enable row level security; alter table public.goals enable row level security; alter table public.tasks enable row level security; alter table public.habits enable row level security; alter table public.habit_completions enable row level security; alter table public.note_folders enable row level security; alter table public.notes enable row level security; alter table public.activity_logs enable row level security;

create policy "profiles owner select" on public.profiles for select using (auth.uid() = id);
create policy "profiles owner insert" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles owner update" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "profiles owner delete" on public.profiles for delete using (auth.uid() = id);

do $$ declare t text; begin foreach t in array array['categories','goals','tasks','habits','habit_completions','note_folders','notes','activity_logs'] loop execute format('create policy "%s owner select" on public.%I for select using (auth.uid() = user_id)', t, t); execute format('create policy "%s owner insert" on public.%I for insert with check (auth.uid() = user_id)', t, t); execute format('create policy "%s owner update" on public.%I for update using (auth.uid() = user_id) with check (auth.uid() = user_id)', t, t); execute format('create policy "%s owner delete" on public.%I for delete using (auth.uid() = user_id)', t, t); end loop; end $$;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer as $$ begin insert into public.profiles(id, full_name) values (new.id, new.raw_user_meta_data->>'full_name'); insert into public.categories(user_id,name,color) values (new.id,'Work','#3b82f6'),(new.id,'Study','#8b5cf6'),(new.id,'Health','#22c55e'),(new.id,'Finance','#f59e0b'),(new.id,'Personal','#ec4899'); return new; end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
