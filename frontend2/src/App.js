import logo from "./logo.svg";
import "./App.css";
import { test } from "./apis/test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={test}>여기눌러봐요</button>
      </header>
    </div>
  );
}

export default App;
