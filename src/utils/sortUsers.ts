import { SortBy } from "../store/slices/usersSlice";
import { User } from "../types/usersTypes";
import { copyObject } from "./copyObject";

export const sortUsers = (users: User[], sortBy: SortBy) => {
  const usersCopy = copyObject(users);

  if (sortBy === "city") {
    return usersCopy.sort((a, b) =>
      a.address.city.localeCompare(b.address.city)
    );
  } else {
    return usersCopy.sort((a, b) =>
      a.company.name.localeCompare(b.company.name)
    );
  }
};
