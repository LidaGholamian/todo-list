"use client";

import { MdDeleteOutline } from "react-icons/md";
import { FiCheckCircle, FiCircle } from "react-icons/fi";

import { useTodoContext } from "@/app/context";

export const TodoList = () => {
  const { state, dispatch } = useTodoContext();

  const toggleTaskCompletion = (id: number) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xs md:text-base lg:text-base xl:text-base text-neutral dark:text-white font-semibold">
        Task List *
      </h2>
      <div>
        <ul className="space-y-2">
          {state.todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between dark:bg-grey/15 dark:hover:bg-grey/25 bg-grey/5 hover:bg-grey/15 p-2 rounded-md gap-2"
              draggable
            >
              <div
                className="flex justify-between items-center flex-grow cursor-pointer text-neutral-content dark:text-white gap-7"
                onClick={() =>
                  dispatch({ type: "TOGGLE_TASK", payload: todo.id })
                }
              >
                <div className="flex justify-center items-center gap-1">
                  <span
                    onClick={() => toggleTaskCompletion(todo.id)}
                    className="cursor-pointer text-[20px]"
                  >
                    {todo.completed ? (
                      <FiCheckCircle className="text-accent/80 dark:text-green-400" />
                    ) : (
                      <FiCircle className="text-gray-400 dark:text-gray-500" />
                    )}
                  </span>
                  <span
                    className={`ml-2 ${
                      todo.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>

                <span className="text-grey/50 text-xs">
                  Added on: {formatDate(todo.date)}
                </span>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", payload: todo.id })
                }
                className="hover:bg-error/90 hover:text-white p-1 rounded"
              >
                <MdDeleteOutline className="text-[20px]" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
