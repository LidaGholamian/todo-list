import React from "react";

import { ButtonProps } from "./button.type";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-primary text-primary-content hover:bg-primary-focus ${className}`}
    >
      {children}
    </button>
  );
};
