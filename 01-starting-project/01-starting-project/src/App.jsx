import { CORE_CONCEPTS as data } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
function App() {
  return (
    <div>
      <Header />;
      <main>
        <section id="core-concepts">
          <ul>
            {data.map((el, index) => {
              return <CoreConcept key={index} {...el} />;
            })}
          </ul>
        </section>
        <menu>
          <TabButton>Component</TabButton>
          <TabButton>Component</TabButton>
          <TabButton>Component</TabButton>
          <TabButton>Component</TabButton>
        </menu>
      </main>
    </div>
  );
}

export default App;
