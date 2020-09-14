import React from "react"
import { Switch, Route } from "react-router-dom"
import Main2 from "./Main2"
import Video2 from "./Video2"
import Game2 from "./Game2"
import "../Courses.scss"


function Course2() {

    return (
       <div>
          <Switch>
            <Route exact path="/course2/"><Main2/></Route>
            <Route path="/course2/video2"><Video2/></Route>
            <Route path="/course2/game2"><Game2/></Route>
          </Switch>
       </div>
    )
}

export default Course2