import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import '../styles/global.scss';

import Layout from '../containers/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
