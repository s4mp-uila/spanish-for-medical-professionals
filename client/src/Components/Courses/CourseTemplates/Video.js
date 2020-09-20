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
      <iframe 
        title="spanishVideo"
        width="560" 
        height="315" 
        src={props.VideoSrc}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      <div className="buttonContainer">
        <button onClick={toMain} className="cancel">Cancel</button>
        <button onClick={toGame} className="next">Next</button>
      </div> 
    </div>
    
  )
  
}

export default Video