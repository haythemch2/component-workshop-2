import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import Foot from "./Components/Foot";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Foot />
    </div>
  );
}

export default App;
