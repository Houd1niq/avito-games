import React from "react";
import { Divider, Layout, Typography } from "antd";
import { SortSelector } from "../../components/SortSelector/SortSelector";
import { GenreSelector } from "../../components/GenreSelector/GenreSelector";
import { PlatformSelector } from "../../components/PlatformSelector/PlatfromSelector";
import { GameList } from "../../components/GameList/GameList";
import "./MainPage.css";

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Layout style={{ flex: 0 }}>
        <Typography.Title
          style={{ textAlign: "center", margin: "10px 0 0" }}
          level={1}
        >
          Avito Tech Games
        </Typography.Title>
        <Divider />
      </Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <div className={"filter-menu"}>
          <div className="filter-item-wrapper">
            <Typography.Text>Sort by: </Typography.Text>
            <SortSelector />
          </div>

          <div className="filter-item-wrapper">
            <Typography.Text>Select genre: </Typography.Text>
            <GenreSelector />
          </div>
          <div className="filter-item-wrapper">
            <Typography.Text>Select platform: </Typography.Text>
            <PlatformSelector />
          </div>
        </div>
        <GameList />
      </div>
    </div>
  );
};

export default MainPage;
