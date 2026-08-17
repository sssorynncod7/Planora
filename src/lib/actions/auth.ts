'use server';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function signIn(formData: FormData) { const supabase = await createClient(); await supabase.auth.signInWithPassword({ email: String(formData.get('email')), password: String(formData.get('password')) }); redirect('/dashboard'); }
export async function signUp(formData: FormData) { const supabase = await createClient(); await supabase.auth.signUp({ email: String(formData.get('email')), password: String(formData.get('password')), options: { data: { full_name: String(formData.get('name') ?? '') } } }); redirect('/dashboard'); }
export async function resetPassword(formData: FormData) { const supabase = await createClient(); await supabase.auth.resetPasswordForEmail(String(formData.get('email')), { redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/login` }); redirect('/login?reset=sent'); }
export async function signOut() { const supabase = await createClient(); await supabase.auth.signOut(); redirect('/login'); }
