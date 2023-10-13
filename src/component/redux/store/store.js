import { applyMiddleware, combineReducers, createStore } from "redux";
import { newsReducer } from "../reducer/newsReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
