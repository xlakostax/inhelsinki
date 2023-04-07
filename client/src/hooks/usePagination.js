import axios from "axios";
import { useEffect, useState } from "react";

export default function usePagination(page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setError(false);
    setLoading(true);
    const initialData = async () => {
      try {
        const response = (await axios.get(`http://localhost:5000/event/`, { params: { page } })).data;
        console.log("Response", response.meta);
        setData((prevData) => [...new Set([...prevData, ...response.data])]);
        setMore(Boolean(response.meta.nextPage));
        setLoading(false);
      } catch (error) {
        setError(true)
      }
    };
    initialData();
  }, [page]);

  return { data, error, loading, more };
}
