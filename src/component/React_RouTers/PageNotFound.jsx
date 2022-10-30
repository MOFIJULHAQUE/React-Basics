import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>Page Not Found - section</h1>

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
        <Link to="/bio">page no found</Link>
        <br />
        <br />

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<PaagenotFound />}></Route>
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

function PaagenotFound() {
  return (
    <>
      <h3>404 page not found</h3>
      <h2>This page is not found</h2>
    </>
  );
}
export default PageNotFound;
