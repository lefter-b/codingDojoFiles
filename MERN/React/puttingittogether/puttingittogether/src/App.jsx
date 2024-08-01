import Details from "./components/Details";

function App() {
  return(
    <div className="App">
      <Details
        name={"Doe,Jane"}
        age={45}
        hair={"Brown"}
        initialname={"Jane Doe"}
      />
      <Details
        name={"Smith,John"}
        age={88}
        hair={"Brown"}
        initialname={"John Smith"}
      />
    </div>
  );
}

export default App;