import React, { useState } from "react";
import {CardList} from './component/CardList';
import {Button,InputLabel,Input  ,FormControl } from '@material-ui/core/'


const App = () => {
  const [searchText, setSearch] = useState("");
  let intialTyping = "";
  const handleChanghe = (e) => {
    intialTyping = e.target.value
    
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(intialTyping);
  }
  return (
    <div>
     
      <FormControl>
      <InputLabel>Search Box</InputLabel>
      <Input id="someIt" onChange={handleChanghe}></Input>
      <Button type="submit" text="Button"  onClick={handleSubmit}  variant="light"> click</Button>
      </FormControl>
      <CardList search={searchText}/>
      
    </div>
  );
};

export default App;
