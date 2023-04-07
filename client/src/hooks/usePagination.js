import axios from "axios";
import {useEffect, useState} from "react";

export default function usePagination(page) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true); // indicates if there's more data to be retrieved from the API.

  useEffect(() => {
    const initialData = async () => {
        try {
          const response = (await axios.get(`http://localhost:5000/event/`, {params: {page}})).data
          console.log("Response", response.meta)
          setData(prevData => [...new Set([...prevData, ...response.data])])
          setMore(Boolean(response.meta.nextPage)); // set more to true if nextPage exists
        } catch (error) {
          console.log(error)
        }
    }
    setLoading(true);
    initialData()
  }, [page])

  return {data, loading, more};
}