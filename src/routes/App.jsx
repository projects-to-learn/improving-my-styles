/* eslint-disable import/no-unresolved */
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "@styles/global.css";

import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";

const App = () => {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
