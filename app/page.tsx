"use client";

import Link from "next/link";

import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6">
      <h1 className="text-2xl font-bold">Welcome to ToDo App</h1>

      <Link href="/todos">
        <Button>Go to Todo List</Button>
      </Link>

      <Link href="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  );
}
