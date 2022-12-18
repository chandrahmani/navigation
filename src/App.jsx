import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";

import Home from "./view/home/Home";
import NavAdd from "./view/navAdd/NavAdd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nav" element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
