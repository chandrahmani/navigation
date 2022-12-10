import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/nav/Home";
import Nav from "./components/nav/Nav";
import NavForm from "./components/NavForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="navForm" element={<NavForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
