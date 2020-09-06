import React from "react"
import {Link} from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About Us</Link>
            <Link to="/teacher">Hire a Teacher</Link>
            <Link to="/login">Login / Sign up</Link>
        </nav>
    )
}

export default Navigation 