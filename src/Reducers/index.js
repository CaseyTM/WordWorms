import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  searchTerm: searchTerm
});

export default rootReducer;
