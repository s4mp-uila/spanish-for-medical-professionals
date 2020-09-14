import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {StateContext} from "../Context/GlobalState"
import "./Courses.scss"

function Courses() {

    const {login} = useContext(StateContext)

    return (
       <div>
           {/* <p style = {login ? {visibility:"visible"} : {visibility:"hidden"}} className="warning">Please login first</p> */}
           <div className="courseContainer">
                <Link to="/course1" className="courseCard">Course 1</Link>
                <Link to="/course2" className="courseCard">Course 2</Link>
                <Link to="/course3" className="courseCard">Course 3</Link>
           </div>
       </div>
    )
}

export default Courses 