import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { usersReducer } from "./reducers/usersReducer";
import { usersWatcher } from "./sagas/usersSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(usersReducer, composeEnhancers);

sagaMiddleware.run(usersWatcher);
