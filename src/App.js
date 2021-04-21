import "./App.css";
import Blog from "./blog/Blog";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Blog />
      </header>
    </div>
  );
}

export default App;
