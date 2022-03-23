import React from "react";

import styles from "./styles/Sidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { SetSortBy } from "../../store/actions/usersActions";
import { SortBy, UsersState } from "../../store/reducers/usersReducer";

export const SideBar = () => {
  const sortBy = useSelector((state: UsersState) => state.sortBy);
  const dispatch = useDispatch();

  const handleClick = (sortBy: SortBy) => {
    return () => dispatch({ ...new SetSortBy(sortBy) });
  };

  return (
    <aside className={styles.body}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Сортировка</h2>
        <div className={styles.sortButtons}>
          <button
            className={styles.sortButton}
            disabled={sortBy === "city"}
            onClick={handleClick("city")}
          >
            по городу
          </button>
          <button
            className={styles.sortButton}
            disabled={sortBy === "company"}
            onClick={handleClick("company")}
          >
            по компании
          </button>
        </div>
      </div>
    </aside>
  );
};
