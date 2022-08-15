import { useState, useEffect } from "react";
import { useCustom } from "./hook/useCustom";
import reactLogo from "./assets/react.svg";
import "./App.css";

const MouseColor = () => {
  const [color, setColor] = useState("orange");

  useEffect(() => {
    function onMouseMove(e) {
      e.clientX < window.innerWidth / 2 ? setColor("orange") : setColor("blue");
    }

    addEventListener("mousemove", onMouseMove);
    console.log("EJECUTANDO");

    return () => {
      console.log("LIMPIANDO");
      window.removeEventListener("mousemove", onMouseMove); // limpiamos los eventos
    };
  }, []);

  console.log("ocurrio el render");

  return (
    <div style={{ height: "10vh", width: "10vh", background: color }}></div>
  );
};

const App = () => {
  const [toggle, count, { handleToggle, handleCount }] = useCustom();

  useEffect(() => {
    document.title = `La cuenta es ${count}`;
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => handleCount()}>Count is {count}</button>
      </div>

      <div className="card">
        <button onClick={() => handleToggle()}>Show / Hide</button> <br />
        <br />
        {toggle && <MouseColor />}
      </div>

      <p className="read-the-docs">AcJoell was here</p>
    </div>
  );
};

export default App;
