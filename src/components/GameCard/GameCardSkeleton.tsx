import React from "react";
import SkeletonImage from "antd/es/skeleton/Image";
import { Skeleton } from "antd";

interface GameCardSkeletonProps {
  className?: string;
}

export const GameCardSkeleton: React.FC<GameCardSkeletonProps> = () => {
  return (
    <div
      data-testid="game-card-skeleton"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <SkeletonImage
        active={true}
        style={{ width: "270px", height: "150px" }}
      />
      <Skeleton style={{ marginTop: "20px", marginLeft: "0px" }} />
    </div>
  );
};
