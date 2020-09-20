import React,{useContext} from "react"
import { Switch, Route } from "react-router-dom"
import Main from "../CourseTemplates/Main"
import Video from "../CourseTemplates/Video"
import Game from "../CourseTemplates/Game"
import {StateContext} from "../../Context/GlobalState"
import "../Courses.scss"


function Course1(props) {
   const {CoursesData} = useContext(StateContext)
    return (
       <div>
          {CoursesData.map(item=>item.id===1?
          <Switch>
          <Route exact path={item.urlHome}><Main {...item}/></Route>
          <Route path={item.urlVideo}><Video {...item}/></Route>
          <Route path={item.urlGame}><Game {...item}/></Route>
        </Switch>
            :""
          )}
       </div>
    )
}
export default Course1