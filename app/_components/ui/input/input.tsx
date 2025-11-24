import React from "react";
import classNames from "classnames";

import { InputProps } from "./input.type";

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  register,
  errors,
  placeholder,
  className,
  disabled,
  inputStyle,
  min,
  max,
  rightElement,
}) => {
  return (
    <div className={classNames(className)}>
      {label && (
        <label className="text-neutral dark:text-white mb-1 block font-medium text-sm">
          {label}
        </label>
      )}
      <div
        className={classNames(
          "flex items-center border rounded-lg h-12 px-3",
          inputStyle,
          {
            "bg-gray-100 dark:bg-base-50": disabled,
            "border-red-500": errors && errors[name],
          }
        )}
      >
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          min={min}
          max={max}
          {...(register ?? {})}
          className="flex-grow bg-transparent outline-none placeholder:text-gray-400 dark:placeholder:text-gray-300"
        />
        {rightElement}
      </div>
      {errors && errors[name] && (
        <p className="text-red-500 mt-1 text-xs">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
