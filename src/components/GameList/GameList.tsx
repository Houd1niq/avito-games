import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/store";
import { FilterSliceState } from "../../store/slices/filterSlice/filterSlice";
import { useGetGameListQuery } from "../../api/gamesApi";
import { GameCard } from "../GameCard/GameCard";
import "./GameList.css";
import { Game } from "../../api/types";
import { useDispatch } from "react-redux";
import {
  nullStep,
  setStep,
} from "../../store/slices/loadingSlice/loadingSlice";
import { Pagination, PaginationProps, Result } from "antd";
import { GameCardSkeleton } from "../GameCard/GameCardSkeleton";
import { ErrorElement } from "../ErrorElement/ErrorElement";

interface GameListProps {
  className?: string;
}

const screenWidth = window.screen.width;
let ITEMS_PER_PAGE = 30;
if (screenWidth > 1192 && 1486) ITEMS_PER_PAGE = 32;

export const GameList: React.FC<GameListProps> = (props) => {
  const dispatch = useDispatch();
  const step = useAppSelector((state) => state.loading.pageStep);
  const { className } = props;
  const filters: FilterSliceState = useAppSelector((state) => state.filter);
  const { data, isFetching, isError } = useGetGameListQuery(filters);
  const [gamesForRender, setGamesForRender] = useState<Game[]>();

  useEffect(() => {
    if (isFetching) dispatch(nullStep());
    if (data && Array.isArray(data)) {
      setGamesForRender(
        [...data].splice((step - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE)
      );
    } else if (data && !Array.isArray(data)) {
      setGamesForRender([]);
    }
  }, [data, step, isFetching]);

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(setStep(page));
  };

  return (
    <>
      <div className={`${className} game-list`}>
        {gamesForRender &&
          gamesForRender.map((item) => <GameCard key={item.id} game={item} />)}
        {isFetching &&
          Array.from({ length: 10 }).map((_, idx) => (
            <GameCardSkeleton key={idx} />
          ))}
        {gamesForRender && gamesForRender.length === 0 && (
          <Result
            status="warning"
            title="Games not found :("
            subTitle="Try to change filters"
          />
        )}
        {isError && <ErrorElement />}
      </div>
      <Pagination
        style={{ marginBottom: "5px", alignSelf: "flex-start" }}
        current={step}
        onChange={onChange}
        pageSize={ITEMS_PER_PAGE}
        showSizeChanger={false}
        total={data && Array.isArray(data) ? data.length : 0}
      />
    </>
  );
};
