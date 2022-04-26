import React from "react";
import './App.css';
import { TextField, Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const Signup = () => {
    return (
        <div>
            <div className="icon">
                <div className="icon_class">
                    <PersonAddIcon fontSize="large" />
                </div>
                <div className="text">Sign Up</div>
            </div>

            <div className="row m-2">
                <div className="col-6 p-2">
                    <TextField id="firstName" type="text" varient="outlined" label="Enter First Name" fullWidth />
                </div>
                <div className="col-6 p-2">
                    <TextField id="lastName" type="text" varient="outlined" label="Enter Last Name" fullWidth />
                </div>
            </div>

            <div className="row m-2">
                <TextField id="email" className="p-2" type="text" varient="outlined" label="Enter E-mail Address" fullWidth />
                <TextField id="Password" className="p-2" type="text" varient="outlined" label="Enter Password" fullWidth />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                        />
                    }
                    label="I agree to all terms and conditions."
                />
                <Link to="/home">
                    <Button variant="contained" color="primary">Create Account</Button>
                </Link>
            </div>
            <Divider varient="middle" />
            <p className=" text-center">
                <Link to="/login" className="text-black-50">
                    <h5>Already have an Account?</h5>
                </Link>
            </p>
        </div>
    );
}
export default Signup;