import { cn } from "@/lib/utils";
import { Task } from "@/types/Task";
import { Check, Trash2, Undo } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TodoForm } from "./todo-form";

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (content: string) => {
    const task: Task = {
      id: window.crypto.randomUUID(),
      content,
      status: false,
    };
    setTasks((prev) => [...prev, task]);
  };

  const removeTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <Card className="w-[600px] h-[600px]">
      <CardHeader>
        <CardTitle>ToDo List</CardTitle>
        <CardDescription>Add tasks to your list.</CardDescription>
        <TodoForm onTaskSubmit={addTask} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 mt-6 overflow-y-scroll w-full h-[400px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-[#5a5a5a]">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "flex w-full border p-4 items-center rounded-lg",
                task.status && "bg-green-400 border-green-100"
              )}
            >
              <p className="w-full">{task.content}</p>
              <div className="flex gap-2">
                <Button onClick={() => toggleTask(task.id)} variant="ghost">
                  {task.status ? (
                    <Undo className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                </Button>
                <Button onClick={() => removeTask(task.id)} variant="ghost">
                  <Trash2 className="w-6 h-6 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
