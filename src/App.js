import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
// import Home from "./components/Home/Home.js";
// import Projects from "./components/Projects/Projects.js";
// import Services from "./components/Services/Services.js";
// import About from "./components/About/About.js";
// import Testimonials from "./components/Testimonials/Testimonials.js";
// import Contact from "./components/Contact/Contact.js";
// import Footer from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <NavBar />
        {/* <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/testimonials">
            <Testimonials />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
        <Footer /> */}
      </div>
    </Router>
  );
}
