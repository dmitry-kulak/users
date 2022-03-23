import { Action } from "redux";

import { FormFieldsRequest, User } from "../../types/usersTypes";
import { SortBy } from "../reducers/usersReducer";

export class LoadUsers implements Action {
  static readonly Name = "LoadUsers";
  readonly type = LoadUsers.Name;
}

export class LoadUsersSuccess implements Action {
  static readonly Name = "LoadUsersSuccess";
  readonly type = LoadUsersSuccess.Name;
  constructor(public users: User[]) {}
}

export class LoadUsersFail implements Action {
  static readonly Name = "LoadUsersFail";
  readonly type = LoadUsersFail.Name;
  constructor(public error: Error) {}
}

export class SetSortBy implements Action {
  static readonly Name = "SetSortBy";
  readonly type = SetSortBy.Name;
  constructor(public sortBy: SortBy) {}
}

export class PutUser implements Action {
  static readonly Name = "PutUser";
  readonly type = PutUser.Name;
  constructor(public formFields: FormFieldsRequest) {}
}

export class PutUserSuccess implements Action {
  static readonly Name = "PutUserSuccess";
  readonly type = PutUserSuccess.Name;
  constructor(public formFields: FormFieldsRequest) {}
}

export class PutUserFail implements Action {
  static readonly Name = "PutUserFail";
  readonly type = PutUserFail.Name;
  constructor(public error: Error) {}
}

export type UsersActions =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | SetSortBy
  | PutUser
  | PutUserSuccess
  | PutUserFail;
