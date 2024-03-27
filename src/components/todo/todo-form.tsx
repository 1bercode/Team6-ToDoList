import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type TodoFormProps = {
  onTaskSubmit: (task: string) => void;
};

const schema = z.object({
  task: z.string().min(1, "Task is required"),
});

export function TodoForm({ onTaskSubmit }: TodoFormProps) {
  const { register, handleSubmit, reset } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleTaskSubmit = handleSubmit((data) => {
    onTaskSubmit(data.task);
    reset();
  });

  return (
    <form className="flex gap-4" onSubmit={handleTaskSubmit}>
      <Input className="w-full" {...register("task")} />
      <Button>Add</Button>
    </form>
  );
}
