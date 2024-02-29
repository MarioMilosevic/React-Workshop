import { CORE_CONCEPTS as data } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
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
      </main>
    </div>
  );
}

export default App;
