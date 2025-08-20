import { createClient } from '@supabase/supabase-js';

// Browser-side client for public inserts; requires RLS and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // Avoid throwing during build export; runtime will error if used without envs
  if (typeof window !== 'undefined') {
    console.warn('Supabase env vars missing. NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }
}

export const supabase = createClient(supabaseUrl || 'http://localhost:54321', supabaseAnonKey || 'anon-key');
