import React from "react"
import {useHistory} from "react-router-dom"
import "../Courses.scss"


function Main(props) {

  const history = useHistory();
    function toVideo(e) {
      e.preventDefault()
      history.push(props.urlVideo)
    }

  return (
    <div className="main mainMain">
      <div className="progressBar">
      <progress value="33" max="100"></progress>
      </div>
      <h1>{props.h1}</h1>
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
      <div className="buttonContainer">
        <button className="cancel">Cancel</button>
        <button onClick={toVideo} className="next">Next</button>
      </div> 
    </div>
  )
  
}

export default Main