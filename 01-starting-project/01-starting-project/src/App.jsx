const reactDescriptions = ["Fundamental", "Crucial", "Core"]
function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}
function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)]
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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

function App() {
  return <Header />;
}

export default App;
