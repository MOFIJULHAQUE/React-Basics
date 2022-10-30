
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Page2 from "./Page2";
const Page1 = () => {
  const Users = [
    { id: 1, name: "Sam", email: "sam@gmail.com" },
    { id: 2, name: "Ram", email: "sagfm@gmail.com" },
    { id: 3, name: "Samir", email: "ssagfm@gmail.com" },
    { id: 4, name: "Prabin", email: "dsagm@gmail.com" },
    { id: 5, name: "Mala", email: "gfsam@gmail.com" },
  ];

  return (
    <>
      <Router>
        <h1>React Dynamic Routing <b>(Still having doubt)</b> </h1>

        {Users.map((item) => {
          return (
            <>
              <Link to={"/user/" + item.id}>
                <h3>{item.name}</h3>
              </Link>
            </>
          );
        })}
        <Routes>
          <Route path="/user/:id" element={<Page2  data={Users}/>}/>
            
         
        </Routes>
        <h1>------------------------------------------------- </h1>
      </Router>
    </>
  );
};

export default Page1;
