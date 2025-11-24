"use client";

import React from "react";
import Link from "next/link";

import { useTodos } from "../hooks/useTodos";

import { TodoCard } from "../_components/todoCard";
import { Button } from "../_components/ui/button";

export default function DashboardPage() {
  const { todos, loading, error } = useTodos();

  return (
    <div className="container flex flex-col justify-between items-center mx-auto p-4">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Dashboard</h1>

      {loading && <p>Loading todos...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!loading &&
          !error &&
          todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
      </div>
      <Link href="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
}
