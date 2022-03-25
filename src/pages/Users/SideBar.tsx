import React from "react";

import { setSortBy, SortBy } from "../../store/slices/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import styles from "./styles/Sidebar.module.scss";

export const SideBar = () => {
  const sortBy = useAppSelector((state) => state.users.sortBy);
  const dispatch = useAppDispatch();

  const handleClick = (sortBy: SortBy) => {
    return () => dispatch(setSortBy(sortBy));
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
