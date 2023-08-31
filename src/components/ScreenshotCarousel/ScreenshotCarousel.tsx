import React from "react";
import { Carousel, Typography } from "antd";

interface ScreenshotCarouselProps {
  className?: string;
  screenshots: { id: number; image: string }[] | undefined;
}

export const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = (
  props
) => {
  const { screenshots } = props;
  if (screenshots && screenshots.length > 0)
    return (
      <>
        <Typography.Title
          style={{ textAlign: "center", paddingBottom: "10px" }}
          level={2}
        >
          Screenshots
        </Typography.Title>
        <Carousel autoplay draggable={true} dots={{ className: "dot" }}>
          {screenshots.map((item) => {
            return <img key={item.id} alt="screenshot" src={item.image} />;
          })}
        </Carousel>
      </>
    );
  return (
    <Typography.Title level={3}>No available screenshots</Typography.Title>
  );
};
