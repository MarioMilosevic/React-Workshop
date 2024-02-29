import reactImg from "./assets/react-core-concepts.png"
import componentsImg from "./assets/components.png"
import stateImg from "./assets/state-mgmt.png"
const reactDescriptions = ["Fundamental", "Crucial", "Core"]
function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}
function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)]
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

const CoreConcept = ({title, description, image}) => {
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return(
    <div>
  <Header />;
  <main>
    <section id="core-concepts">
      <ul>
    <CoreConcept title="Components" description="The core UI building block" image={componentsImg}/>
    
      </ul>
    </section>
  </main>
  </div>
    )
}

export default App;
