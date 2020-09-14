import React from "react"
import { Switch, Route } from "react-router-dom"
import Main3 from "./Main3"
import Video3 from "./Video3"
import Game3 from "./Game3"
import "../Courses.scss"


function Course3() {

    return (
       <div>
          <Switch>
            <Route exact path="/course3/"><Main3/></Route>
            <Route path="/course3/video3"><Video3/></Route>
            <Route path="/course3/game3"><Game3/></Route>
          </Switch>
       </div>
    )
}

export default Course3