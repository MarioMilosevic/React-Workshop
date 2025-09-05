import Counter from "./components/counter/Counter";
import Greeting from "./components/greeting/Greeting";
import UserProfile from "./components/userProfile/UserProfile";

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
