import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "../reducer/count";
import logger from "redux-logger";
import { lottoNumberReducers } from "../reducer/lottoNumbers";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  count: countReducer,
  numbers: lottoNumberReducers,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: hardSet,
  },
  rootReducer
);

// export const store = createStore(rootReducer, applyMiddleware(logger));
export const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export default store;
