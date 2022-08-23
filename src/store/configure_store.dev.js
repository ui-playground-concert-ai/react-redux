import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers/reducer_root";

export default function configureStore(initialState) {
  const middlewares = [thunkMiddleware];

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
