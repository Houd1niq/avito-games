import React from "react";
import { Result } from "antd";

export const ErrorElement: React.FC = () => {
  return (
    <Result
      status="error"
      title="Oops, something went wrong"
      subTitle="Try again later"
    />
  );
};
