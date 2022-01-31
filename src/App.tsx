import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";

import Menu from "./components/menu";
import Home from "./components/home";

function App() {
  return (
    <Router basename="/">
      <>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </>
    </Router>
  );
}

export default App;
