import React,{useContext} from 'react';
import Navigation from "./Components/Navigation/Navigation"
import {Route, Switch} from "react-router-dom"
import About from "./Components/About/About"
import Courses from "./Components/Courses/Courses"
import Home from "./Components/Home/Home"
import Teacher from "./Components/Teacher/Teacher"
import Login from "./Components/Login/Login"
import LoginCheck from "./Components/LoginCheck/LoginCheck"
import Course1 from "./Components/Courses/Course1"
import Course2 from "./Components/Courses/Course2"
import Course3 from "./Components/Courses/Course3"
import {StateContext} from "./Components/Context/GlobalState"
import './App.css';

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
        <Route path="/course1">{login?<Course1 />:<h1 className="warningPerm">Please login first to be able using this Course</h1>}</Route>
        <Route path="/course2">{login?<Course2 />:<h1 className="warningPerm">Please login first to be able using this Course</h1>}</Route>
        <Route path="/course3">{login?<Course3 />:<h1 className="warningPerm">Please login first to be able using this Course</h1>}</Route>
      </Switch>
    </div>
  )
}

export default App;
