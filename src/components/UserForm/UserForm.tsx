import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import { FormField } from "../FormField/FormField";
import { FormFields, UserFormField } from "../../types/usersTypes";
import { PutUser } from "../../store/actions/usersActions";
import { formFields } from "./formFields";
import { validationSchema } from "./validationSchema";

import styles from "./UserForm.module.scss";

type UserFormProp = {
  initialValues: FormFields;
  isEditing: boolean;
  userId: string;
  isUsersLoading: boolean;
};

export const UserForm = ({
  initialValues,
  isEditing,
  userId,
  isUsersLoading,
}: UserFormProp) => {
  const dispatch = useDispatch();

  const renderFormFields = (formFields: UserFormField[]) =>
    formFields.map((formField) => (
      <FormField
        key={formField.name}
        isUsersLoading={isUsersLoading}
        as={formField.as}
        name={formField.name}
        label={formField.label}
        isDisabled={!isEditing}
        placeholder={formField.placeholder}
      />
    ));

  const handleSubmit = (formFields: FormFields) => {
    console.log(formFields);
    dispatch({ ...new PutUser({ ...formFields, userId: userId }) });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form id="userForm" className={styles.body}>
          {renderFormFields(formFields)}
        </Form>
      </Formik>

      <button
        className={styles.submitButton}
        type="submit"
        form="userForm"
        disabled={!isEditing}
      >
        Отправить
      </button>
    </>
  );
};
