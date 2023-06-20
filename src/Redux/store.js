import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducer, { initState } from "./reducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({ app: reducer, auth: authReducer });

const logger = () => (next) => (action) => {
  console.log("logger 1 dispatching action:", action);
  console.log("dispatcher", store);
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

console.log(store.getState());
