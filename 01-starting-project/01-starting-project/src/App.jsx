import { CORE_CONCEPTS as data } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState();
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
        {!tabContent && <p>Please select a topic</p>}
        {tabContent && (
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
