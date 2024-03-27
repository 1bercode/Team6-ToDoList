import { Todo } from "@/components/todo";

function App() {
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-black relative">
      <img
        src="/teamsix.png"
        alt="logo"
        className="absolute top-10 left-16 w"
      />
      <Todo />
    </main>
  );
}

export default App;
