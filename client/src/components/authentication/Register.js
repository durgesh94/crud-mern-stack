import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            Register
            <Link to="/login">Submit</Link>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Register;