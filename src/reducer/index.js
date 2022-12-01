import { combineReducers } from 'redux';

const inputChangeReducer = (state = '', action) => {
  if (action.type === 'INPUT_CHANGE') {
    state = action.payload;
  }
  return state;
};

const inputReducer = (state = [], action) => {
  if (action.type === 'ON_FORM_SUBMIT') {
    return (state = [action.payload]);
  }
  return state;
};

const toggleReducer = (state = false, action) => {
  if (action.type === 'COMPONENT_TOGGLE') {
    state = !state;
  }
  return state;
};

export default combineReducers({
  inputChangeControl: inputChangeReducer,
  inputControl: inputReducer,
  toggleControl: toggleReducer,
});
