import { TodoContainer } from "./_components/todoContainer";
import { TodoProvider } from "./context/context";

export default function Home() {
  return (
    <TodoProvider>
      <div className="flex justify-center items-center container min-h-screen w-full gradient">
        <TodoContainer />
      </div>
    </TodoProvider>
  );
}
