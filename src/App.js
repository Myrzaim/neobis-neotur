import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail/Detail";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path = "/" element = {<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
