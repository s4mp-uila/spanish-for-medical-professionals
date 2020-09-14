import React from 'react';
import Navigation from "./Components/Navigation/Navigation"
import {Route, Switch} from "react-router-dom"
import About from "./Components/About/About"
import Courses from "./Components/Courses/Courses"
import Home from "./Components/Home/Home"
import Teacher from "./Components/Teacher/Teacher"
import Login from "./Components/Login/Login"
import LoginCheck from "./Components/LoginCheck/LoginCheck"
import './App.scss';

function App() {

  
  
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
      </Switch>
    </div>
  )
}

export default App;
