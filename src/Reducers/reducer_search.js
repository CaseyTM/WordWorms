import {FETCH_WORD} from "../actions/index"

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
      // we do not want to do state.push because that mutates our state. a big no no. .concat() or below returns a new array
      return [action.payload.data, ...state]
  }
  return state;
};
