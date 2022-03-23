import { User } from "../../types/usersTypes";
import {
  LoadUsersFail,
  LoadUsersSuccess,
  PutUserFail,
  PutUserSuccess,
  SetSortBy,
  UsersActions,
} from "../actions/usersActions";
import { sortUsers } from "../../utils/sortUsers";

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

export const usersReducer = (
  state: UsersState = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case LoadUsersSuccess.Name:
      return { ...state, users: action.users, isUsersLoading: false };

    case LoadUsersFail.Name:
      return { ...state, error: action.error, isUsersLoading: false };

    case SetSortBy.Name:
      return {
        ...state,
        users: sortUsers(state.users, action.sortBy),
        sortBy: action.sortBy,
      };

    case PutUserSuccess.Name:
      console.log("updated user on server");
      return state;

    case PutUserFail.Name:
      console.log(action.error);
      return state;

    default:
      return state;
  }
};
