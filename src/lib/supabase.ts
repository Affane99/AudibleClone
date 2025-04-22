import { useAuth } from '@clerk/clerk-expo';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;


export const useSupabase = () => {
    const { getToken } = useAuth();

    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        accessToken: async () => getToken() ?? null,
    });
}