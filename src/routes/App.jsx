import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import { Routes, Route, HashRouter} from "react-router-dom";
//Container
import Layout from "../containers/Layout";
//Views
import Home from "../pages/Home";
//Renders
const App = () => {
  return (
    <Router >
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
