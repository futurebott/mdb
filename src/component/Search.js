import React, { useState } from "react";
import {CardList} from './CardList.jsx';
import {useApi}  from '../api/Search';
import {Button,InputLabel,Input  ,FormControl } from '@material-ui/core/'
import { searchRepos, processTitles } from "../api/api";


const Search = function() {

const [searchText, setSearch] = useState("");
  let [isLoading, returnedData, error] = useApi(searchRepos, processTitles, intialTyping);
  let apiResults = {isLoading:isLoading, data:returnedData, error : error}
  let intialTyping = "";
  const handleChanghe = (e) => {
    intialTyping = e.target.value
   
  }
 const handleKeyPress = (e) => {
    if(e.key === "Enter")
    {
    e.preventDefault();
    //const [isLoading, data, error] = useApi(searchRepos, processTitles, intialTyping);
     setSearch(intialTyping);
    }
   
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(intialTyping);
    //const [isLoading, data, error] = useApi(searchRepos, processTitles, inputText);
  }
  return (
    <div>
     
      <FormControl>
      <InputLabel>Search Box</InputLabel>
      <Input id="someIt" onKeyPress={handleKeyPress} onChange={handleChanghe}></Input>
      <Button type="submit"  onClick={handleSubmit}> click</Button>
      </FormControl>
      <CardList searchResults={apiResults}/>
      
    </div>
  );
};

export default Search;
