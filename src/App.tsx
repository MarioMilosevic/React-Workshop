import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Greeting name="Mario" />
      <Counter />
      <UserProfile userId={1} />
    </div>
  );
};

export default App;
