// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";
// import Example from "./components/Example";

// const queryClient = new QueryClient();
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button>Increment +</button>
      <p>Counter {counter}</p>
      <button>Decrement -</button>
    </div>
    // <QueryClientProvider client={queryClient}>
    //   <Example />
    // </QueryClientProvider>
  );
};

export default App;
