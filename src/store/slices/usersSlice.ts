import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";

import { FormFieldsRequest, User } from "../../types/usersTypes";

export type SortBy = "city" | "company";

export type UsersState = {
  users: User[];
  sortBy: SortBy;
  error: Error | null;
  isUsersLoading: boolean;
};

const initialState: UsersState = {
  users: [],
  sortBy: "city",
  error: null,
  isUsersLoading: true,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsersSuccess(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.isUsersLoading = false;
    },
    loadUsersFail(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
    setSortBy(state, action: PayloadAction<SortBy>) {
      state.sortBy = action.payload;
    },
    putUserSuccess(state, action: PayloadAction<FormFieldsRequest>) {
      console.log("updated user on server");
    },
    putUserFail(state, action: PayloadAction<Error>) {
      console.log(action.payload.message);
    },
  },
});

export const {
  loadUsersSuccess,
  loadUsersFail,
  putUserSuccess,
  putUserFail,
  setSortBy,
} = usersSlice.actions;

export const loadUsersAction = createAction("users/loadUsers");

export const putUserAction = createAction<FormFieldsRequest, "users/putUser">(
  "users/putUser"
);
export type putUserActionType = ReturnType<typeof putUserAction>;
