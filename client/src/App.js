import React,{useContext} from 'react';
import Navigation from "./Components/Navigation/Navigation"
import {Route, Switch} from "react-router-dom"
import About from "./Components/About/About"
import Courses from "./Components/Courses/Courses"
import Home from "./Components/Home/Home"
import Teacher from "./Components/Teacher/Teacher"
import Login from "./Components/Login/Login"
import LoginCheck from "./Components/LoginCheck/LoginCheck"
import CourseDetails from "./Components/Courses/CourseDetails"
import {StateContext} from "./Components/Context/GlobalState"
import './App.scss';


function App() {

  const {login} = useContext(StateContext)

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/courses"><Courses /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/loginCheck"><LoginCheck /></Route>
        <Route path="/teacher"><Teacher /></Route>
        <Route path="/course1">{login?<CourseDetails courseId={1}/>:<h1 className="warningPerm">Please login first to be able using this Course</h1>}</Route>
        <Route path="/course2">{login?<CourseDetails courseId={2}/>:<h1 className="warningPerm">Please login first to be able using this Course</h1>}</Route>
        <Route path="/course3">{login?<CourseDetails courseId={3}/>:<h1 className="warningPerm">Please login first to be able using this Course</h1>}</Route>
      </Switch>
    </div>
  )
}

export default App;
