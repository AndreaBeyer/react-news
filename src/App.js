import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Details from './components/Details';
import Footer from './components/Footer';
import RouterToHome from './components/RouterToHome';

function App() {
  return (
    <div className="bg-slate-800 max-w-full h-full min-h-screen font-mono text-white overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<RouterToHome />} exact />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
