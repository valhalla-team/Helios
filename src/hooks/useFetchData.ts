"use client";

import { useState, useEffect } from "react";
import { fetchData } from "@/services/graphqlService";

export default function useFetchData<T>(query: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadData = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await fetchData(query);
      setData(result);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [query]);

  return { data, loading, error, loadData };
}
