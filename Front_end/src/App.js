import React, { useEffect } from "react";
import Controls from "./Components/Controls/Controls.js";


import {useDispatch} from 'react-redux';
import {getDegrees} from './actions/degrees';
import {getColleges} from './actions/colleges';
function App(props) {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getDegrees());
},[dispatch])
useEffect(()=>{
  dispatch(getColleges());
},[dispatch])


  return (
    <React.Fragment>
      <Controls />

    </React.Fragment>
  );
}
export default App;
