import { useState, useEffect } from "react";
import { Todos } from "../types/todos.type";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        if (!res.ok) throw new Error("Failed to fetch todos");
        const data: Todos[] = await res.json();
        setTodos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { todos, loading, error };
};
