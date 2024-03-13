import { ButtonProps } from "@/components/atoms/Button/types";
import React from "react";

export const Button = (props: ButtonProps) => {
  const { children, onClick, type, disabled, className, ...restButtonProps } =
    props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center rounded ${className}`}
      {...restButtonProps}
    >
      {children}
    </button>
  );
};
