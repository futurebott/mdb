
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=81f61c79f3be940431af3e81d040e13e
import { useState, useEffect } from "react";

export const useApi = (apiFunction, params, callback) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFunction(params)
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
  }, [apiFunction, params, callback]);

  return [isLoading, data, error];
};