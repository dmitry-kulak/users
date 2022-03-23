import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./styles/Users.module.scss";
import { SideBar } from "./SideBar";
import { UsersList } from "./UsersList";
import { UserProfile } from "./UserProfile";
import { LoadUsers } from "../../store/actions/usersActions";

export const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ ...new LoadUsers() });
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
