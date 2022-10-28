import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Basics = () => {
  return (
    <>
      <h1>Router</h1>

      <Router>
        <Link to="/home">Home Page</Link>
        <br />
        <br />
        <Link to="/about">About Page</Link>
        <br />
        <br />
        <Link to="/contact">Contact Page</Link>
        <br />
        <br />
        {/* <About />
        <Contact /> */}
        <Routes>
          <Route path="/home" element={<Home />}>
            {" "}
          </Route>
          <Route path="/about" element={<About />}> 
          </Route>
          <Route path="/contact" element={<Contact />}>
            {" "}
          </Route>
        </Routes>
      </Router>
      <h1>-------------------------------------------------</h1>
    </>
  );
};
function Home() {
  return (
    <>
      <h3>Home Page</h3>
    </>
  );
}

function About() {
  return (
    <>
      <h3>About Page</h3>
    </>
  );
}

function Contact() {
  return (
    <>
      <h3>Contact Page</h3>
    </>
  );
}

export default Basics;
