import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aybtskzpjlayffygczgj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5YnRza3pwamxheWZmeWdjemdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NjYwNjIsImV4cCI6MjAyMjM0MjA2Mn0.tY96lrpnakdUFzlu_5CawBctbuXMwxSAxr_7Uk0ZwzA'
export const supabase = createClient(supabaseUrl, supabaseKey)