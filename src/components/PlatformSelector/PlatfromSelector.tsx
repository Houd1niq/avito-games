import React from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { addPlatform } from "../../store/slices/filterSlice/filterSlice";
import { platform } from "../../api/types";
import { useAppSelector } from "../../store/store";

interface SortSelectorProps {
  className?: string;
}

export const PlatformSelector: React.FC<SortSelectorProps> = (props) => {
  const dispatch = useDispatch();
  const { className } = props;
  const currentPlatform = useAppSelector((state) => state.filter.platform);
  return (
    <Select
      className={className}
      defaultValue={currentPlatform}
      style={{ minWidth: "100px", maxWidth: "330px" }}
      onChange={(value) => {
        dispatch(addPlatform(value as platform));
      }}
      options={[
        { value: "all", label: "All" },
        { value: "pc", label: "PC" },
        { value: "browser", label: "Browser" },
      ]}
    />
  );
};
