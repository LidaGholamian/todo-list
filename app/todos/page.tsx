import Link from "next/link";

import { TodoContainer } from "../_components/todoContainer";
import { TodoProvider } from "../context";
import { Button } from "../_components/ui/button";

export default function Home() {
  return (
    <TodoProvider>
      <div className="flex flex-col justify-between items-center">
        <TodoContainer />
        <Link href="/">
          <Button>Back</Button>
        </Link>
      </div>
    </TodoProvider>
  );
}
