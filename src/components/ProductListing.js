import React, { useEffect } from "react";
import axios from "axios";
import './ProductListing.css';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import { TextField, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
// import ProductComponent from "./ProductComponent";

const ProductPage = (props) => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <div>
        <h1>E-Commerce Shop</h1>
        <Link to="/home"><Button variant="contained" color="primary">LogOut</Button></Link>
      </div>
      {/* <ProductComponent /> */}
      <TextField id="filled-basic" label="Search a product" variant="filled" onChange={e=>props.setSearchTitle(e.target.value)}/>
      {console.log(props.searchTitle)}
      <Grid container spacing={3}>
      {products.map((item) => {
        return (
          

            <Grid item xs={4} className="items">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt="img" width="200px" height="200px" />
              </Link>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </Grid>
          )
      })}
      </Grid>
    </div>
  );
};

export default ProductPage;
