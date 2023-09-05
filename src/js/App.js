import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DataProvider from "../data";
import Login from "../views/Auth/Login";
import MainMenu from "../views/Main";
import SignUp from "../views/Auth/SignUp";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainMenu />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
