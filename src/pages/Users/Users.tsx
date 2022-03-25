import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { loadUsersAction } from "../../store/slices/usersSlice";
import { useAppDispatch } from "../../store/hooks";

import styles from "./styles/Users.module.scss";
import { SideBar } from "./SideBar";
import { UserProfile } from "./UserProfile";
import { UsersList } from "./UsersList";

export const Users = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUsersAction());
  }, [dispatch]);

  return (
    <div className={styles.body}>
      <SideBar />
      <Routes>
        <Route index element={<Navigate to="all" />} />
        <Route path="all" element={<UsersList />} />
        <Route path=":userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
};
