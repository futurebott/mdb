//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=81f61c79f3be940431af3e81d040e13e
import { useState, useEffect } from "react";
//import { Popular } from "./Json/Popular";
export const useApi = (apiFunction, callback) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //let data = JSON.parse(Popular());
    //setData(data);

    const query = { query: "" };
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
  }, [apiFunction, callback]);

  return [isLoading, data, error];
};
