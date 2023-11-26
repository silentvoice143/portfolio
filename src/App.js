import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import About from "./components/About/About";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Skill from "./components/Skills/Skill";
import Contact from "./components/Contact/Contact";
import Service from "./components/Services/Service";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="App">
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" Component={Home} />

          <Route path="/about" Component={About} />
          <Route path="/work" Component={Work} />
          <Route path="/skills" Component={Skill} />
          <Route path="/contact" Component={Contact} />
          <Route path="/service" Component={Service} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
