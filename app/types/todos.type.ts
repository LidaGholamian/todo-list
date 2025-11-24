import { TodoProps } from "../_components/types/list.type";

export type Todos = Omit<TodoProps, 'date' | 'favIcon' > & {
userId: number;
}
