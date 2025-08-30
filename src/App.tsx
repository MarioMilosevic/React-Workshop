import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Example from "./components/Example";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <h1>Mario je frontend developer</h1>
    </QueryClientProvider>
  );
};

export default App;
