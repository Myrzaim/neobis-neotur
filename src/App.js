import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./pages/detailsPage/Detail/Detail";
import Main from "./pages/mainPage/main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path = "/detail/:id" element = {<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
