import React, { useEffect } from "react";

type ErrorComponentProps = {
  error: Error;
};

export const ErrorComponent = ({ error }: ErrorComponentProps) => {
  useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <div>
      <h2>{error.name}</h2>
      <p>{error.message}</p>
    </div>
  );
};
