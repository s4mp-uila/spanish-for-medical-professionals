import React from "react"
import {useHistory} from "react-router-dom"
import "../Courses.scss"


function Game(props) {

  const history = useHistory();
  function toMain(e) {
    e.preventDefault()
    history.push(props.urlHome)
  }

  return (
    <div className="main">
      <div className="progressBar">
        <progress value="100" max="100"></progress>
      </div>
      <img alt="Spanish Game" src={props.ImgSrc}/>
      <div className="buttonContainer">
        <button onClick={toMain} className="cancel">Cancel</button>
        <button onClick={toMain} className="next">Next</button>
      </div> 
    </div>
    
  )
  
}

export default Game