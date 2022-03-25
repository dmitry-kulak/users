import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { UsersState } from "../../store/slices/usersSlice";
import { useAppSelector } from "../../store/hooks";

import styles from "./styles/UsersList.module.scss";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";
import { UserCard } from "../../components/UserCard/UserCard";

export const UsersList = () => {
  const state = useAppSelector((state) => state.users);

  useEffect(() => {
    document.title = "Users";
  }, []);

  const renderList = ({ users, isUsersLoading, error }: UsersState) => {
    if (isUsersLoading) {
      return [...Array(5)].map((a, index) => (
        <Skeleton key={index} count={1} className={styles.skeleton} />
      ));
    }
    if (error) return <ErrorComponent error={error} />;

    return users.map((user) => (
      <UserCard
        key={user.name}
        id={user.id}
        name={user.name}
        city={user.address.city}
        company={user.company.name}
      />
    ));
  };

  return (
    <main className={styles.body}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Список пользователей</h2>

        <div className={styles.list}>{renderList(state)}</div>

        {!state.isUsersLoading && (
          <p className={styles.usersFound}>
            Найдено {state.users.length} пользователей
          </p>
        )}
      </div>
    </main>
  );
};
