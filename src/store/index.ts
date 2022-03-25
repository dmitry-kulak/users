import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { usersSlice } from "./slices/usersSlice";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { users: usersSlice.reducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
