import { supabase } from './supabaseClient';

export type WaitlistSignup = {
  email: string;
  source: string;
  page: string;
  timestamp?: string;
  metadata?: Record<string, unknown>;
};

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
  source?: string;
  page?: string;
  timestamp?: string;
  metadata?: Record<string, unknown>;
};

export async function saveWaitlistSignup(data: WaitlistSignup): Promise<void> {
  const { error } = await supabase
    .from('waitlist_signups')
    .insert({
      email: data.email,
      source: data.source,
      page: data.page,
      metadata: data.metadata || {},
      created_at: data.timestamp || new Date().toISOString(),
    });

  // Ignore duplicate email (unique constraint) as a successful outcome
  if (error) {
    // PostgrestError.code is a string, e.g., '23505' for unique_violation
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const code = (error as any).code as string | undefined;
    if (code === '23505') return;
    throw error;
  }
}

export async function saveContactMessage(data: ContactMessage): Promise<void> {
  const { error } = await supabase
    .from('contact_messages')
    .insert({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      company: data.company || null,
      phone: data.phone || null,
      source: data.source || 'Sisu Speak Contact Form',
      page: data.page || 'contact',
      metadata: data.metadata || {},
      created_at: data.timestamp || new Date().toISOString(),
    });

  if (error) throw error;
}
