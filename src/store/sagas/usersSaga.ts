import { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { call, put, takeEvery, select } from "redux-saga/effects";

import { FormFieldsRequest, User } from "../../types/usersTypes";
import { getUsers, putUser } from "../../api/users.api";
import {
  LoadUsers,
  LoadUsersFail,
  LoadUsersSuccess,
  PutUser,
  PutUserFail,
  PutUserSuccess,
} from "../actions/usersActions";
import { SortBy, UsersState } from "../reducers/usersReducer";
import { sortUsers } from "../../utils/sortUsers";

function* fetchUsers() {
  try {
    const sortBy: SortBy = yield select((state: UsersState) => state.sortBy);

    const response: AxiosResponse<User[]> = yield call(getUsers);

    const sortedUsers = sortUsers(response.data, sortBy);

    yield put({ ...new LoadUsersSuccess(sortedUsers) });
  } catch (err) {
    yield put({ ...new LoadUsersFail(err as Error) });
  }
}

function* updateUser(action: PutUser) {
  try {
    const response: AxiosResponse<FormFieldsRequest> = yield call(
      putUser,
      action.formFields
    );

    yield put({ ...new PutUserSuccess(response.data) });
  } catch (err) {
    yield put({ ...new PutUserFail(err as Error) });
  }
}

export function* usersWatcher(): SagaIterator {
  yield takeEvery(LoadUsers.Name, fetchUsers);
  yield takeEvery(PutUser.Name, updateUser);
}
