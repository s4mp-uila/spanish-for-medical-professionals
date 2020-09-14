import React from "react"
import {useHistory} from "react-router-dom"
import "../Courses.css"


function Main(props) {

  const history = useHistory();
    function toVideo(e) {
      e.preventDefault()
      history.push(props.url)
    }

  return (
    <div className="main mainMain">
      <div className="progressBar">
      <progress value="33" max="100"></progress>
      </div>
        {props.children}
        <button className="cancel">Cancel</button>
        <button onClick={toVideo} className="next">Next</button>
    </div>
  )
  
}

export default Main