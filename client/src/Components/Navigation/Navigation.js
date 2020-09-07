import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {StateContext} from "../Context/GlobalState"
import "./Navigation.css"

function Navigation() {
    const {tempName,login,user,Logout} = useContext(StateContext)

    return (
        <nav>
            <Link to="/" style ={login?{color:"red"}:{color:"green"}}>Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About Us</Link>
            <Link to="/teacher">Hire a Teacher</Link>
            {login ? <Link onClick={Logout} to="/login">Welcome {tempName} / Logout</Link> : <Link to="/login">Login / Sign up</Link> }
        </nav>
    )
}

export default Navigation 