import useActive from "./Hooks/useActive";

function App() {
  const [estado, {handleToggle, handleTrue, handleFalse}] = useActive(true);

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleTrue}>True</button>
      <button onClick={handleFalse}>False</button>

      <h1>{estado.toString()}</h1>

      <ShowInfo />
    </>
  );
}

function ShowInfo() {
  const [estado, {handleToggle}] = useActive(true);

  return (
    <>
      <button onClick={handleToggle}>Show / Hide</button>
      {estado && <h1 style={{ background: "#DDDDDD" }}>User Info</h1>}
    </>
  );
}

export default App;
