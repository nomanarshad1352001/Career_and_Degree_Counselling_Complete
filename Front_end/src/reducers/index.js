import { combineReducers } from "redux";
import Colleges from './colleges';
import Degrees from './degrees';

export default combineReducers({ 
    degrees: Colleges, 
    colleges: Degrees 
});