"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { TodoAction, TodoState } from "../types/todoContext.type";
import { TodoProps } from "../_components/types/list.type";


const initialState: TodoState = { todos: [] };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TASK":
      const newTodo: TodoProps = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        date: action.payload.date || new Date().toISOString(),
        favIcon: action.payload.favIcon || false,
      };
      return { todos: [...state.todos, newTodo] };
    case "DELETE_TASK":
      return { todos: state.todos.filter((t) => t.id !== action.payload) };
    case "TOGGLE_TASK":
      return {
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case "INITIALIZE_TASKS":
      return { todos: action.payload };
    default:
      return state;
  }
};

const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}>({ state: initialState, dispatch: () => undefined });

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState, (initial) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("todos");
      return saved ? { todos: JSON.parse(saved) } : initial;
    }
    return initial;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
