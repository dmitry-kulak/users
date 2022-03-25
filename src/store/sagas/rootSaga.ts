import { SagaIterator } from "redux-saga";
import { fork } from "redux-saga/effects";

import { usersWatcher } from "./usersSaga";

export function* rootSaga(): SagaIterator {
  yield fork(usersWatcher);
}
