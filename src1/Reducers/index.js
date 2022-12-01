 
import {combineReducers} from 'redux';

const ctrlInputReducer=(state = [], action)=> {
    if(action.type === 'inputed_text'){
      state =  [...state,action.payload]; 
      } 
      return state;
};

const displayReducer =(state=false, action)=> {
   if(action.type === 'show_comp') {
    state = ! state
   } 
   return state;
};

export default combineReducers({
    inputTxt : ctrlInputReducer,
    showTxt : displayReducer
});