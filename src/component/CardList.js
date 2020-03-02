import React from "react";
import { useApi } from "../api/Search";
import { searchRepos, processTitles } from "../api/api";
export const CardList = (props) => {
    const [isLoading, data, error] = useApi(searchRepos, processTitles, props.search);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const repos = error ? [] : data;
  return (
    <div>
     
      {error && <div>{error}</div>}

      {repos.results
        .filter(function(rep) {
          if (rep == null) {
            return false; // skip
          }
          return true;
        })
        .map(repo => (
          <div
            key={`repo-${repo.id}`}
            style={{ marginTop: 20}}
          >
            <p>
              {repo.original_title}
              <br />
            </p>
          </div>
        ))}
    </div>
  );
 };