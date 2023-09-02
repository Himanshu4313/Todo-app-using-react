import { combineReducers, createStore } from "redux";
//import todoReducers
import TodoReducer from "./reducer/todoReducer";


 const reducers = combineReducers({todo : TodoReducer});

 const store = createStore(reducers);

export default store;


