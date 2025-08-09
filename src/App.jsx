import React, { useState } from "react";
import A1 from "./public/assets/a1.jpg";
import A2 from "./public/assets/a2.jpg";
import About from "./componet/About";
import Contact from "./componet/Contact";
import Education from "./componet/Education";
import Home from "./componet/Home";
import Project from "./componet/Project";
import Skill from "./componet/Skill";
import Navbar from "./componet/Navbar";

function App() {
  const [count, setCount] = useState(0);
  return (
     <div className="flex flex-col">
      <Navbar />
      <Home/>
      <About/>
      <Project/>
      <Skill/>
      <Education/>
      <Contact/>
     </div>
  );
}

export default App;
