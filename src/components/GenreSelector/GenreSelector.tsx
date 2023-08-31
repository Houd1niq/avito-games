import React from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import {
  addGenre,
  removeGenre,
} from "../../store/slices/filterSlice/filterSlice";
import { genresArray } from "./genres";
import { useAppSelector } from "../../store/store";
import "./GenreSelector.css";

interface SortSelectorProps {
  className?: string;
}

export const GenreSelector: React.FC<SortSelectorProps> = (props) => {
  const dispatch = useDispatch();
  const { className } = props;
  const currentGenres = useAppSelector((state) => state.filter.tag);
  return (
    <Select
      maxTagCount={3}
      defaultValue={currentGenres}
      className={`${className} genre-selector`}
      mode="multiple"
      style={{ minWidth: "150px", maxWidth: "400px" }}
      placeholder={"Select genre"}
      onDeselect={(value) => {
        dispatch(removeGenre(value));
      }}
      onSelect={(value) => {
        dispatch(addGenre(value));
      }}
      options={genresArray}
    />
  );
};
