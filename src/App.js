import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Counter : {counter}</h2>
        <div className="button-container">
          <button onClick={() => setCounter((c) => c - 1)}>Decrement</button>
          <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
        </div>
      </header>
    </div>
  );
}
