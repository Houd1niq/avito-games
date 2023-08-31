import React from "react";
import { List, Typography } from "antd";

interface SystemRequirementsListProps {
  className?: string;
  requirements:
    | {
        graphics: string;
        memory: string;
        os: string;
        processor: string;
        storage: string;
      }
    | undefined;
}

export const SystemRequirementsList: React.FC<SystemRequirementsListProps> = (
  props
) => {
  const { requirements } = props;
  if (requirements)
    return (
      <>
        <Typography.Title
          style={{ marginTop: "15px" }}
          className="title"
          level={2}
        >
          System Requirements
        </Typography.Title>
        <List
          rootClassName={"system-list"}
          dataSource={Object.entries(requirements)}
          size={"small"}
          renderItem={([parametr, value]) => {
            return (
              <List.Item>
                <List.Item.Meta
                  title={parametr.toUpperCase()}
                  description={value}
                />
              </List.Item>
            );
          }}
        ></List>
      </>
    );
  return (
    <Typography.Title style={{ marginTop: "10px" }} level={3}>
      No available system requirements
    </Typography.Title>
  );
};
