import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import RegisterBusinessForm from './pages/Register';
import LoginForm from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Footer />
          </>
        } />
        <Route path="/register" element={< LoginForm/>} />
        <Route path="/login" element={<RegisterBusinessForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
