import { instance } from "./api";
import { FormFieldsRequest, User } from "../types/usersTypes";

export const getUsers = () => {
  return instance.get<User[]>("users");
};

export const putUser = (data: FormFieldsRequest) => {
  // should return User[] or User but doesn't smh
  return instance.put<FormFieldsRequest>(`users/${data.userId}`, data);
};
