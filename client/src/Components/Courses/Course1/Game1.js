import React from "react"
import Game from "../CourseChildren/Game"
import "../Courses.scss"

function Game1(props) {

  

  return (
    <div>
      <Game url="/course1/">
        <img alt="Spanish Game" src="https://bit.ly/2QjsSnr"/>
      </Game>
    </div>
  )
  
}

export default Game1