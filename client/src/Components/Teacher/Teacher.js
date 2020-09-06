import React,{useContext} from "react"
import {StateContext} from "../Context/GlobalState"
import "./Teacher.css"

function Teacher() {

    const {login} = useContext(StateContext)

    return (
       <h1 style ={login?{color:"red"}:{color:"green"}}>Teacher page goes here!</h1> 
    )
}

export default Teacher 