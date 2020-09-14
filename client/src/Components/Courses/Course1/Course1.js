import React from "react"
import { Switch, Route } from "react-router-dom"
import Main1 from "./Main1"
import Video1 from "./Video1"
import Game1 from "./Game1"
import "../Courses.css"


function Course1() {

    return (
       <div>
          <Switch>
            <Route exact path="/course1/"><Main1/></Route>
            <Route path="/course1/video1"><Video1/></Route>
            <Route path="/course1/game1"><Game1/></Route>
          </Switch>
       </div>
    )
}

export default Course1