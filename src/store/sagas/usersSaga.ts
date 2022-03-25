import { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { call, put, takeEvery, select } from "redux-saga/effects";

import { FormFieldsRequest, User } from "../../types/usersTypes";
import { RootState } from "../index";
import { getUsers, putUser } from "../../api/users.api";
import { sortUsers } from "../../utils/sortUsers";
import {
  loadUsersFail,
  loadUsersSuccess,
  putUserFail,
  putUserSuccess,
  putUserAction,
  loadUsersAction,
  SortBy,
  putUserActionType,
} from "../slices/usersSlice";

function* fetchUsers() {
  try {
    const sortBy: SortBy = yield select(
      (state: RootState) => state.users.sortBy
    );

    const response: AxiosResponse<User[]> = yield call(getUsers);

    const sortedUsers = sortUsers(response.data, sortBy);

    yield put(loadUsersSuccess(sortedUsers));
  } catch (err) {
    yield put(loadUsersFail(err as Error));
  }
}

function* updateUser(action: putUserActionType) {
  try {
    const response: AxiosResponse<FormFieldsRequest> = yield call(
      putUser,
      action.payload
    );

    yield put(putUserSuccess(response.data));
  } catch (err) {
    yield put(putUserFail(err as Error));
  }
}

export function* usersWatcher(): SagaIterator {
  yield takeEvery(loadUsersAction.type, fetchUsers);
  yield takeEvery(putUserAction.type, updateUser);
}
