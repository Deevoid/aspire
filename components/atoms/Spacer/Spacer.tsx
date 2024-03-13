import { SpacerProps } from "@/components/atoms/Spacer/types";
import React from "react";

export const Spacer = (props: SpacerProps) => {
  const { size, axis = "horizontal" } = props;

  const height = axis === "horizontal" ? size : "100%";
  const width = axis === "horizontal" ? "100%" : size;

  return (
    <div
      style={{
        height,
        width,
      }}
    />
  );
};
