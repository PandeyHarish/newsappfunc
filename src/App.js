import "./App.css";
import "./css/gototop.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newscomponent from "./components/Newscomponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoToTopButton from "./components/Gototop";

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<Newscomponent key="general" pageSize={this.pageSize} country={"in"} category={"general"} />} />
            <Route exact path="/" element={<Newscomponent key="general" pageSize={this.pageSize} country={"in"} category={"general"} />} />
            <Route exact path="/Business" element={<Newscomponent key="business" pageSize={this.pageSize} country={"in"} category={"business"} />} />
            <Route exact path="/Technology" element={<Newscomponent key="technology" pageSize={this.pageSize} country={"in"} category={"technology"} />} />
            <Route exact path="/Science" element={<Newscomponent key="science" pageSize={this.pageSize} country={"in"} category={"science"} />} />
            <Route
              exact
              path="/Entertainment"
              element={<Newscomponent key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"} />}
            />

            <Route exact path="/Sports" element={<Newscomponent key="sports" pageSize={this.pageSize} country={"in"} category={"sports"} />} />
            <Route exact path="/health" element={<Newscomponent key="health" pageSize={this.pageSize} country={"in"} category={"health"} />} />
          </Routes>
        </BrowserRouter>
        <GoToTopButton/>
      </>
    );
  }
}
