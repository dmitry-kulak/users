import React from "react";

import styles from "./UserCard.module.scss";
import { Link } from "react-router-dom";

type UserCardProps = {
  id: number;
  name: string;
  city: string;
  company: string;
};

export const UserCard = ({ name, city, company, id }: UserCardProps) => {
  return (
    <article className={styles.body}>
      <div className={styles.content}>
        <div className={styles.userData}>
          <p className={styles.field}>
            <span className={styles.fieldName}>ФИО:</span>
            <span className={styles.fieldContent}>{name}</span>
          </p>

          <p className={styles.field}>
            <span className={styles.fieldName}>город:</span>
            <span className={styles.fieldContent}>{city}</span>
          </p>

          <p className={styles.field}>
            <span className={styles.fieldName}>компания:</span>
            <span className={styles.fieldContent}>{company}</span>
          </p>
        </div>

        <Link to={`/users/${id}`} className={styles.showMore}>
          Подробнее
        </Link>
      </div>
    </article>
  );
};
