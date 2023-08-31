import React from "react";
import { Game } from "../../api/types";
import { Card, Typography } from "antd";
import "./GameCard.css";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
  refLink?: React.Ref<HTMLDivElement>;
}

export const GameCard: React.FC<GameCardProps> = ({ game, refLink }) => {
  return (
    <Link data-testid="game-card-link" to={`/game/${game.id}`}>
      <Card
        ref={refLink}
        style={{ position: "relative" }}
        bodyStyle={{
          padding: "16px 24px 4px",
          display: "flex",
          flexDirection: "column",
          height: "165px",
        }}
        hoverable={true}
        cover={
          <img
            loading="lazy"
            style={{ width: "270px", height: "150px" }}
            src={game.thumbnail}
            alt="обложка"
          />
        }
        className="game-card"
      >
        <Typography.Text className="genre-label">{game.genre}</Typography.Text>
        <Typography.Title style={{ marginTop: "10px" }} level={4}>
          {game.title}
        </Typography.Title>
        <div style={{ marginTop: "auto" }}>
          <Typography.Paragraph style={{ marginBottom: "2px" }}>
            {game.publisher}
          </Typography.Paragraph>
          <Typography.Paragraph>{game.release_date}</Typography.Paragraph>
        </div>
      </Card>
    </Link>
  );
};
