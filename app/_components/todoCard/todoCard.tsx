"use client";

import React from "react";

import { FiCheckCircle, FiCircle } from "react-icons/fi";
import classNames from "classnames";

import { todoCardProps } from "./todoCard.type";

export const TodoCard: React.FC<todoCardProps> = ({ todo }) => {
  return (
    <div
      className={classNames(
        "border rounded-md p-4 flex items-center justify-between",
        todo.completed ? "bg-green-50" : "bg-white dark:bg-base-50"
      )}
    >
      <span
        className={classNames(
          "text-sm md:text-base",
          todo.completed && "line-through text-gray-400"
        )}
      >
        {todo.title}
      </span>
      <span className="text-xl">
        {todo.completed ? (
          <FiCheckCircle className="text-green-500" />
        ) : (
          <FiCircle className="text-gray-400" />
        )}
      </span>
    </div>
  );
};
