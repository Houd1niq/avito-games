import React from "react";
import SkeletonImage from "antd/es/skeleton/Image";
import "../MainPage.css";

interface PosterLoaderProps {
  className?: string;
}

export const PosterLoader: React.FC<PosterLoaderProps> = () => {
  return (
    <SkeletonImage
      style={{ width: "100%", height: "100%" }}
      active
      rootClassName="image-skeleton"
    />
  );
};
