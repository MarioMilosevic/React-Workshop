import { CORE_CONCEPTS as data } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
function App() {
  const [tabContent, setTabContent] = useState("Please click a button");
  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
