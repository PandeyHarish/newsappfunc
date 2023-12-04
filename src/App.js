import "./App.css";
import "./css/gototop.css";

import React from "react";
import Navbar from "./components/Navbar";
import Newscomponent from "./components/Newscomponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoToTopButton from "./components/Gototop";

const App = () => {
  var pageSize = 9;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Newscomponent key="general" pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route exact path="/" element={<Newscomponent key="general" pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route exact path="/Business" element={<Newscomponent key="business" pageSize={pageSize} country={"in"} category={"business"} />} />
          <Route exact path="/Technology" element={<Newscomponent key="technology" pageSize={pageSize} country={"in"} category={"technology"} />} />
          <Route exact path="/Science" element={<Newscomponent key="science" pageSize={pageSize} country={"in"} category={"science"} />} />
          <Route
            exact
            path="/Entertainment"
            element={<Newscomponent key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"} />}
          />

          <Route exact path="/Sports" element={<Newscomponent key="sports" pageSize={pageSize} country={"in"} category={"sports"} />} />
          <Route exact path="/health" element={<Newscomponent key="health" pageSize={pageSize} country={"in"} category={"health"} />} />
        </Routes>
      </BrowserRouter>
      <GoToTopButton />
    </>
  );
};

export default App;