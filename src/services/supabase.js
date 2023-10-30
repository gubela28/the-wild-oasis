import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hmviddjrextmpqqnxzni.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtdmlkZGpyZXh0bXBxcW54em5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1ODg4MDQsImV4cCI6MjAxNDE2NDgwNH0.ecclJ1U9lQqeTk6AUMih-MmO1yphrzUMsj7aziSroTs";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
