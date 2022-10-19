import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/amandapccs/repos')
    .then(response => setData(response.data))
    .catch(err => setError(err))
    .finally(() => setIsFetching(false));
  }, []);
  return { data, isFetching, error };
}