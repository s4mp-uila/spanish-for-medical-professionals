import React from "react"
import Video from "../CourseChildren/Video"
import "../Courses.scss"

function Video1(props) {

  

  return (
    <div>
      <Video urlGame = "/course1/game1" urlHome="/course1/">
      <iframe 
        title="spanishVideo"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/t7-nb1wlnyA" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      </Video>
    </div>
  )
  
}

export default Video1