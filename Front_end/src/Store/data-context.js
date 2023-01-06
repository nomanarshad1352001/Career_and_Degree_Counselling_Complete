import React from "react";

const DataContext = React.createContext({
  Degrees: [],
  UserData:{},
  Colleges:[],
  IsLoggedIn:true,
});
export default DataContext;
