# Deployment

## Supabase
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Enable email authentication and configure redirect URLs for `/auth/callback`, `/login`, and your production domain.
4. Copy the project URL and anon key into `.env.local` or your hosting provider.

## Vercel
1. Import the repository into Vercel.
2. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_APP_URL`, and optionally `OPENAI_API_KEY`.
3. Build with `npm run build` and deploy.

## Production checklist
- Verify RLS policies with multiple test users.
- Configure password reset email templates.
- Add an AI provider implementation in `src/lib/actions/planner.ts` if live AI generation is required.
- Enable analytics, error monitoring, and database backups.
