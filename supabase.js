const SUPABASE_URL = "https://kmymesloxjoieoeixtkn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtteW1lc2xveGpvaWVvZWl4dGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MDcxNDAsImV4cCI6MjA4ODM4MzE0MH0.foptnn6T6DhzfGydcR-zfCpqkVAcfqXij7TZeB8CvjU";

export const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);