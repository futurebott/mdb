import React,{ useState } from 'react'
import {CardList} from './component/CardList.jsx';
import {Button,InputLabel,Input  ,FormControl } from '@material-ui/core/'

function SearchContainer() {
    const [searchText, setSearch] = useState("");
    let intialTyping = "";
    const handleChanghe = (e) => {
      intialTyping = e.target.value
     
    }
    const handleKeyPress = (e) => {
      if(e.key === "Enter")
      {
      e.preventDefault();
      setSearch(intialTyping);
      }
     
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      setSearch(intialTyping);
    }
    return (
      <div>
       
        <FormControl>
        <InputLabel>Search Box</InputLabel>
        <Input id="someIt" onKeyPress={handleKeyPress} onChange={handleChanghe}></Input>
        <Button type="submit"  onClick={handleSubmit}> click</Button>
        </FormControl>
        <CardList search={searchText}/>
        
      </div>
    );
}

export default SearchContainer
