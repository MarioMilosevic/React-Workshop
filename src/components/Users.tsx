import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchData } from "../utils/helpers";

const Users = () => {

  const { data:users, isLoading, error } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["users"],
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Users;
