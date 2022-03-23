import React from "react";

type ErrorComponentProps = {
  error: Error;
};

export const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <div>
      <h2>{error.name}</h2>
      <p>{error.message}</p>
    </div>
  );
};
