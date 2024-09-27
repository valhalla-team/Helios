"use client";

import { useState, useEffect } from 'react';
import { fetchUserData } from '@/services/graphqlService';

export default function useFetchUserData() {
  const [user, setUser] = useState<{ avatarUrl: string, name: string , email: string, location: string} | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadUserData = async () => {
    setLoading(true);
    setError(false);
    try {
      const userData = await fetchUserData();
      setUser(userData);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return { user, loading, error, loadUserData };
};
