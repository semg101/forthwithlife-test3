import { DATA_LOADED } from "../constants/action-types";

const initialState = { 
  remoteTests: []
};



function rootReducer(state = initialState, action) { 

  if (action.type === DATA_LOADED) { 
    return Object.assign({}, initialState, {
      remoteTests: state.remoteTests.concat(action.payload)
    }); 
  }
  return state;
}

export default rootReducer;