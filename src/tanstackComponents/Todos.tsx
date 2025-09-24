import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData as getTodos, postData as postTodo } from "../utils/helpers";

export default function Todos() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div className="flex flex-col gap-4 border border-white p-8">
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate("Mario Milosevic");
        }}
      >
        Add user
      </button>
    </div>
  );
}
