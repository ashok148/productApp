import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import ProductListing from "./components/ProductListing.js";
import ProductDetails from "./components/ProductDetails.js";
import Error from "./components/Error.js";
import axios from "axios";


function App() {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setPosts(response.data);
      setLoading(false);
    }
    loadPosts();
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<ProductListing searchTitle={searchTitle}
              setSearchTitle={setSearchTitle}
            />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
