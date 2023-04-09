import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { seriesReducer } from "./seriesReducer";
import { popupImageReducer } from "./popupImageReducer";

const reducers = combineReducers({
  series: seriesReducer, 
  popup: popupImageReducer
})

export const store = createStore(reducers, composeWithDevTools());
