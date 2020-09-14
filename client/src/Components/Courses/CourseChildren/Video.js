import React from "react"
import {useHistory} from "react-router-dom"
import "../Courses.scss"


function Video(props) {

  const history = useHistory();
  function toGame(e) {
    e.preventDefault()
    history.push(props.urlGame)
  }
  function toMain(e) {
    e.preventDefault()
    history.push(props.urlHome)
  }

  return (
    <div className="main">
      <div className="progressBar">
        <progress value="66" max="100"></progress>
      </div>
        {props.children}
      <button onClick={toMain} className="cancel">Cancel</button>
      <button onClick={toGame} className="next">Next</button>
    </div>
    
  )
  
}

export default Video