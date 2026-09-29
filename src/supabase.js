import { createClient } from '@supabase/supabase-js'

// Mengambil dari .env, atau langsung memakai link project Anda jika .env gagal dibaca
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qsquwjnleigllnfqaomw.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_2xW1jKmqDL2lZNExheQpCg_pepE4cRt'

export const supabase = createClient(supabaseUrl, supabaseKey)