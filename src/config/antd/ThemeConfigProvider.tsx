import React, { ReactNode } from "react";
import { ConfigProvider, theme } from "antd";

const { darkAlgorithm } = theme;

export const ThemeConfigProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#651d45",
          colorInfo: "#651d45",
          colorSuccess: "#42b608",
          colorWarning: "#d4910b",
          colorError: "#b5383a",
          borderRadius: 4,
          colorBgBase: "#0B0A0D",
        },
        algorithm: darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
