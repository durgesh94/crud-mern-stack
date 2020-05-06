import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <div>Welcome</div>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Landing;