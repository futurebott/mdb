//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=81f61c79f3be940431af3e81d040e13e
import { useState, useEffect } from "react";
export const useApi = (apiFunction, callback, query) => {
  const [data, setData] = useState({results:[]});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(query ==="")
    {
      setData({results:[]});
      setIsLoading(false);
    }
    else{
    apiFunction(query)
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
        if (callback) {
          callback(data);
        }
      })
      .catch(() => {
        setError("Something went wrong");
        setIsLoading(false);
      });
    }
  }, [apiFunction, callback, query]);

  return [isLoading, data, error];
};
