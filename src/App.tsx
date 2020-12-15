import React from "react";
import "./App.css";

async function fetchData() {
  const res = await fetch("/hello");
  const data = await res.json();
  console.log(data);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => fetchData()}>
          Fetch data
        </button>
      </header>
    </div>
  );
}

export default App;
