import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            Login
            <Link to="/home">Submit</Link>
            <div>
                <Link to="/register">New User?</Link>
                <Link to="/forgot-username">Forgot Username</Link>
                <Link to="/forgot-password">Forgot Password</Link>
            </div>
        </div>
    )
}

export default Login;