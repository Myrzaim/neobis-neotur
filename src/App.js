import "./App.css";
import Discover from "./components/discover/Discover";
import Main from "./components/main/Header";
import Recommended from "./components/recommended/Recommended";

function App() {
  return (
    <div className="App">
      <Main />
      <Discover />
      <Recommended />
    </div>
  );
}

export default App;
