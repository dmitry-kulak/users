import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./styles/UserProfile.module.scss";
import { useSelector } from "react-redux";
import { UsersState } from "../../store/reducers/usersReducer";
import { UserForm } from "../../components/UserForm/UserForm";
import { FormFields } from "../../types/usersTypes";
import { copyObject } from "../../utils/copyObject";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";

export const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams() as { userId: string };
  const state = useSelector((state: UsersState) => state);

  useEffect(() => {
    if (state.users[+userId - 1]) {
      document.title = state.users[+userId - 1].username;
    }
  }, [state, userId]);

  const handleEditButtonClick = () => setIsEditing(!isEditing);
  const handleExitButtonClick = () => navigate("/users/all");

  const renderForm = (state: UsersState) => {
    if (state.error) return <ErrorComponent error={state.error} />;

    let initialValues: FormFields = {
      name: "",
      username: "",
      email: "",
      street: "",
      city: "",
      zip: "",
      phone: "",
      website: "",
      comment: "",
    };

    if (!state.isUsersLoading) {
      const user = copyObject(state.users[+userId - 1]);

      initialValues = {
        name: user.name,
        username: user.username,
        email: user.email,
        street: user.address.street,
        city: user.address.city,
        zip: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        comment: "",
      };
    }

    return (
      <UserForm
        initialValues={initialValues}
        isEditing={isEditing}
        userId={userId}
        isUsersLoading={state.isUsersLoading}
      />
    );
  };

  return (
    <main className={styles.body}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Профиль пользователя</h2>
          {!state.error && (
            <div className={styles.headerButtons}>
              <button
                className={styles.editButton}
                disabled={state.isUsersLoading}
                onClick={handleEditButtonClick}
              >
                Редактировать
              </button>
              <button
                className={styles.exitButton}
                onClick={handleExitButtonClick}
              >
                Выйти
              </button>
            </div>
          )}
        </header>

        {renderForm(state)}
      </div>
    </main>
  );
};
