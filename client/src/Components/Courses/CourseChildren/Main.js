import React from "react"
import "../Courses.css"


function Main(props) {

  return (
    <div className="main mainMain">
      <div className="progressBar">
      <progress value="33" max="100"></progress>
      </div>
        {props.children}
    </div>
  )
  
}

export default Main