export const SaveData = (key,data) => {

  var localData = localStorage.getItem(key);
  var stringData = JSON.stringify(data)
  if(localData !== stringData)
  localStorage.setItem(key, stringData);
  
};

