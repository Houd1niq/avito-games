import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGameInfoQueryWithCache } from "../../api/hooks/useGameInfoQueryWithCache";
import { Button, Divider, Image, Typography } from "antd";
import { ErrorElement } from "../../components/ErrorElement/ErrorElement";
import { DoubleLeftOutlined, PauseOutlined } from "@ant-design/icons";
import "./GamePage.css";
import { PosterLoader } from "../MainPage/MainPageLoaders/PosterLoader";
import { MainInfoLoader } from "../MainPage/MainPageLoaders/MainInfoLoader";
import SkeletonImage from "antd/es/skeleton/Image";
import { SystemRequirementsList } from "../../components/SystemRequirementsList/SystemRequirementsList";
import { ScreenshotCarousel } from "../../components/ScreenshotCarousel/ScreenshotCarousel";

interface GamePageProps {
  className?: string;
}

const GamePage: React.FC<GamePageProps> = () => {
  const { gameId = "0" } = useParams();
  const navigate = useNavigate();
  const { data, isError, isSuccess, isLoading } = useGameInfoQueryWithCache(
    Number(gameId)
  );

  let GameContent = <></>;

  if (isLoading) {
    GameContent = (
      <div className="game-page-container">
        <div className="main-info">
          <PosterLoader />
          <MainInfoLoader />
        </div>
        <Divider />
        <SkeletonImage
          active
          style={{ width: "100%", height: "100%" }}
          rootClassName="carousel-loader"
        />
      </div>
    );
  }

  if (isError && !isLoading) GameContent = <ErrorElement />;

  if (isSuccess && data) {
    const releaseDate = new Date(data.release_date).toLocaleDateString(
      "ru-RU",
      { year: "numeric", month: "numeric", day: "numeric" }
    );

    GameContent = (
      <div className="game-page-container">
        <div className="main-info">
          <Image
            rootClassName={"poster"}
            src={data.thumbnail}
            alt="thumbnail"
          />
          <div>
            <Typography.Title className="title" level={1}>
              {data.title}
            </Typography.Title>
            <div className="small-ifno">
              <Typography.Text>{data.genre}</Typography.Text>
              <PauseOutlined />
              <Typography.Text>Разработчик: {data.developer}</Typography.Text>
              <PauseOutlined />
              <Typography.Text>Издатель: {data.publisher}</Typography.Text>
              <PauseOutlined />
              <Typography.Text>{releaseDate}</Typography.Text>
            </div>
            <SystemRequirementsList
              requirements={data.minimum_system_requirements}
            />
          </div>
        </div>
        <Divider />
        <ScreenshotCarousel screenshots={data.screenshots} />
      </div>
    );
  }

  return (
    <div className="game-page">
      <div className="game-page-nav">
        <Button
          data-testid="back-button"
          type={"text"}
          onClick={() => navigate(-1)}
        >
          <DoubleLeftOutlined />
          Go Back
        </Button>
      </div>

      {GameContent}
    </div>
  );
};

export default GamePage;
