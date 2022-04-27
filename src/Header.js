import { Button} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="ui container center">
        <h2>E-Commerce Shop</h2>
        <Link to="/signup"><Button variant="contained" color="primary">Register</Button></Link>
        <Link to="/login"><Button variant="contained" color="primary">Login</Button></Link>
      </div><br></br>
      <hr></hr>
    </>
  );
};

export default Header;

