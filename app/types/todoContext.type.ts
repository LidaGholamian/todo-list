import { TodoProps } from "../_components/types/list.type";

export interface TodoState {
  todos: TodoProps[];
}

export type TodoContextType = {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
};

export type TodoAction =
  | { type: "ADD_TASK"; payload: { title: string; date?: string; favIcon?: boolean } }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "INITIALIZE_TASKS"; payload: TodoProps[] }
