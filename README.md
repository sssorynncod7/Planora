# Planora

A modern personal planning app inspired by Notion, Todoist, and Google Calendar. Built with Next.js 15, TypeScript, Tailwind CSS, and Supabase authentication/database.

## Project architecture

```text
src/
  app/                 Next.js App Router routes, grouped into auth and app shells
  components/          Reusable UI and feature components
  lib/                 Supabase clients, utilities, server actions, AI planner logic
  types/               Shared TypeScript database/domain interfaces
supabase/schema.sql    Tables, indexes, triggers, and Row Level Security policies
docs/deployment.md     Deployment and Supabase setup instructions
```

## Getting started

1. Copy `.env.example` to `.env.local` and fill in Supabase credentials.
2. Run the SQL in `supabase/schema.sql` in your Supabase project.
3. Install dependencies with `npm install`.
4. Start development with `npm run dev`.

## Features

- Dashboard with today's tasks, weekly overview, productivity score, and recent activity.
- Task management with priorities, dates, categories, statuses, and drag-ready components.
- Calendar daily/weekly/monthly model with tasks rendered by date.
- Goals with progress and task linkage.
- Habit streaks, completion history, and consistency metrics.
- Notes with folders, pinning, and search-ready structure.
- Statistics pages with reports and charts.
- AI Planner endpoint/action scaffolding for goal decomposition and schedule optimization.
- Supabase Auth for sign up, login, logout, and password reset.
