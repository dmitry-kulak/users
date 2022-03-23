import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./FormField.module.scss";

type FormFieldProps = {
  as?: "textarea";
  name: string;
  label: string;
  isDisabled: boolean;
  placeholder: string;
  isUsersLoading: boolean;
};

export const FormField = ({
  as,
  name,
  label,
  placeholder,
  isDisabled,
  isUsersLoading,
}: FormFieldProps) => {
  const field = useField(name);
  const error = field[1].error;

  const renderField = () => {
    if (isUsersLoading) {
      return (
        <div className={styles.inputSkeleton}>
          <Skeleton count={1} />
        </div>
      );
    }

    if (as) {
      return (
        <Field
          as={as}
          name={name}
          disabled={isDisabled}
          className={styles.textarea}
        />
      );
    } else {
      return (
        <Field
          name={name}
          placeholder={placeholder}
          disabled={isDisabled}
          className={`${styles.input} ${error && styles.inputError}`}
        />
      );
    }
  };

  return (
    <div className={styles.body}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      {renderField()}

      <p className={styles.errorMessage}>
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};
