import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/tailwind.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className={` App`}>
          {/* <ThemeToggle /> */}
          <Navbar />
          <Hero />
          <About />
          <Projects />
          {/* <Experience /> */}
          <Blog />
          {/* <Contact /> */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
