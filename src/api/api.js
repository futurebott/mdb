import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "81f61c79f3be940431af3e81d040e13e";
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=81f61c79f3be940431af3e81d040e13e
//https://api.themoviedb.org/3/search/movie?api_key=81f61c79f3be940431af3e81d040e13e&query=test
export const searchRepos = params => {
  // if (params) {
    let url = `${BASE_URL}/search/movie?api_key=${API_KEY}`;
    const  query  = params === "" ? "0000": params;
    url = `${url}&query=${query}`;
    return axios.get(url);
  
};

export const discover = params => {
  // if (params) {
  //   const { query } = params;
  //   if (query) {
  //const url = `${BASE_URL}/search/repositories?q=${query}&sort=stars&order=desc`;
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;
  return axios.get(url);
  //  }
  // }

  //throw new Error("Must provide a query");
};

export const processTitles = data => {
  var movieSlim = [];
  data.results.forEach(element => {
    movieSlim.push({ Title: element.original_title, id: element.id });
  });
  return movieSlim;
};
