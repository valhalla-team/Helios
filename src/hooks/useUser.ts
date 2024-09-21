"use client";

import { fetchUserData } from '@/services/graphqlService';
import { useState, useEffect } from 'react';

interface User {
  avatarUrl: string;
}

interface UseUserReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export function useUser(): UseUserReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      try {
        const userData = await fetchUserData();
        if (isMounted) {
          setUser(userData);
        }
      } catch (err) {
        console.error('Error while searching for user:', err);
        if (isMounted) {
          setError('Unable to obtain user data.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    return () => {
      isMounted = false;  // Cleanup quando o componente for desmontado
    };
  }, []);

  return { user, loading, error };
}
