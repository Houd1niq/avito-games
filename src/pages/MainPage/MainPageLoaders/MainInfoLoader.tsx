import React from "react";
import SkeletonInput from "antd/es/skeleton/Input";
import { Skeleton } from "antd";

interface MainInfoLoaderProps {
  className?: string;
}

export const MainInfoLoader: React.FC<MainInfoLoaderProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: "35px",
        width: "80%",
      }}
    >
      <SkeletonInput active />
      <Skeleton active />
      <Skeleton active />
    </div>
  );
};
