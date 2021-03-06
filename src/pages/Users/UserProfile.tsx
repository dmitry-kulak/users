import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UsersState } from "../../store/slices/usersSlice";
import { useAppSelector } from "../../store/hooks";

import styles from "./styles/UserProfile.module.scss";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";
import { FormFields } from "../../types/usersTypes";
import { UserForm } from "../../components/UserForm/UserForm";
import { copyObject } from "../../utils/copyObject";

export const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams() as { userId: string };
  const state = useAppSelector((state) => state.users);

  useEffect(() => {
    if (state.users[+userId - 1]) {
      document.title = state.users[+userId - 1].name;
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
          <h2 className={styles.heading}>?????????????? ????????????????????????</h2>
          {!state.error && (
            <div className={styles.headerButtons}>
              <button
                className={styles.editButton}
                disabled={state.isUsersLoading}
                onClick={handleEditButtonClick}
              >
                ??????????????????????????
              </button>
              <button
                className={styles.exitButton}
                onClick={handleExitButtonClick}
              >
                ??????????
              </button>
            </div>
          )}
        </header>

        {renderForm(state)}
      </div>
    </main>
  );
};
