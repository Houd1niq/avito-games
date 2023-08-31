import React from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { setSortType } from "../../store/slices/filterSlice/filterSlice";
import { SortType } from "../../api/types";
import { useAppSelector } from "../../store/store";

interface SortSelectorProps {
  className?: string;
}

export const SortSelector: React.FC<SortSelectorProps> = (props) => {
  const dispatch = useDispatch();
  const { className } = props;
  const currentSort = useAppSelector((state) => state.filter.sort);
  return (
    <Select
      className={className}
      defaultValue={currentSort}
      onSelect={(value) => {
        dispatch(setSortType(value as SortType));
      }}
      options={[
        { label: "By relevance", value: "relevance" },
        { label: "By release date", value: "release-date" },
        { label: "By popularity", value: "popularity" },
        { label: "By alphabetical", value: "alphabetical" },
      ]}
    />
  );
};
