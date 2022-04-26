import React from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './Home';
import ProductListing from "./components/ProductListing.js";
import ProductDetails from "./components/ProductDetails.js";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <div className="App">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProductListing/>} />
            <Route path="/product/:productId" element={<ProductDetails/>} />
            <Route>404 Not Found!</Route>
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
