import React from "react"
import Main from "../CourseChildren/Main"
import {useHistory} from "react-router-dom"
import "../Courses.css"

function Main1() {

    const history = useHistory();
    function toVideo(e) {
      e.preventDefault()
      history.push("/course1/video1")
    }

  return (
    <div>
      <Main>
        <h1>SpanishForProfessionals</h1>
        <h3>Learning Spanish with <b>SpanishForProfessionals</b> is entirely free. 
            We are available for classroom or home with dozens of games, 
            coloring pages and interactive activities ordered by levels that you can access anytime 
            in tablets or desktops.</h3>
            <p>After completion of each part, just click on the NEXT button to go forward</p>
        <button className="cancel">Cancel</button>
        <button onClick={toVideo} className="next">Next</button>
       </Main>
    </div>
  )
  
}

export default Main1