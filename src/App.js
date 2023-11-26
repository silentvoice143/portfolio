import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import About from "./components/About/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skill from "./components/Skills/Skill";
import Contact from "./components/Contact/Contact";
import Service from "./components/Services/Service";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/portfolio" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/work" Component={Work} />
          <Route exact path="/skills" Component={Skill} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/service" Component={Service} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
