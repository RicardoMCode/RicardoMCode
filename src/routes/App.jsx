import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Container
import Layout from "../containers/Layout";
//Views
import Home from "../pages/Home";
//Renders
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
