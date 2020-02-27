
import React from "react";
import { useApi } from "./api/Search";
import { searchRepos } from "./api/api";

const App = () => {
  const query = { query: "" };
  const processTitles = data => {
    var movieSlim = [];
    // data.results.forEach(element => {
    //   movieSlim.push({Title:element.original_title, id:element.id})
    // });
    // return movieSlim;
  };
  const [isLoading, data, error] = useApi(searchRepos, query, processTitles);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const repos = error ? [] : data;
  // callback function
  return (
    <div>
      <p>Discover API</p>
      {error && <div>{error}</div>}

      {repos.results.filter(function(rep) {
  if (rep == null) {
    return false; // skip
  }
  return true;
}).map(repo => (
        <div
          key={`repo-${repo.id}`}
          style={{ marginTop: 20, borderTop: "1px solid #e3e3e3" }}>
          <p>
            Title: {repo.original_title} 
            <br />
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;