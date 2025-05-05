import { useQuery, useMutation } from "@tanstack/react-query";
import React from "react";
import { fetchData } from "../utils/helpers";

// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";

// const queryClient = new QueryClient();
// <QueryClientProvider client={queryClient}>
//   <Users/>
// </QueryClientProvider>
const Users = () => {

  const add = () => {
    console.log('dodaje')
    return 'mario'
  }

  const { data:users, isLoading, error } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["users"],
  });

  // const {mutateAsync:addUserMutation} = useMutation({
  //   mutationFn: () => add(),
  //   onSuccess: () => {
      
  //   }
    
  // });



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
