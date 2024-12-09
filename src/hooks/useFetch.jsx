import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    const cached = localStorage.getItem(url);
    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      localStorage.setItem(url, JSON.stringify(data));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
