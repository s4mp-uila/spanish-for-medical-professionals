import React from "react"
import {useHistory} from "react-router-dom"
import "../Courses.css"


function Game(props) {

  const history = useHistory();
  function toMain(e) {
    e.preventDefault()
    history.push("/")
  }

  return (
    <div className="main">
      <div className="progressBar">
        <progress value="100" max="100"></progress>
      </div>
        {props.children}
      <button onClick={toMain} className="cancel">Cancel</button>
      <button onClick={toMain} className="next">Done</button>
    </div>
    
  )
  
}

export default Game