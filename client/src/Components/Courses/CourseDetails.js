import React,{useContext} from "react"
import { Switch, Route } from "react-router-dom"
import Main from "./CourseTemplates/Main"
import Video from "./CourseTemplates/Video"
import Game from "./CourseTemplates/Game"
import {StateContext} from "../Context/GlobalState"
import "./Courses.scss"


function CourseDetails(props) {
   const {CoursesData} = useContext(StateContext)
   const item = CoursesData[props.courseId-1]
    return (
       <div>
        <Switch>
          <Route exact path={item.urlHome}><Main {...item}/></Route>
          <Route path={item.urlVideo}><Video {...item}/></Route>
          <Route path={item.urlGame}><Game {...item}/></Route>
        </Switch>
       </div>
    )
}
export default CourseDetails