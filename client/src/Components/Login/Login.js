import React,{useContext} from "react";
import {useHistory} from "react-router-dom"
import {StateContext} from "../Context/GlobalState"
import "./Login.scss"

 function Signup(props) {

  const {firstName,email, password, handleChangeEmail, handleChangePassword, handleChangeFirstName, Save,login, matching} = useContext(StateContext)

  const history = useHistory();
  
  return (
    <div>
    {login ? history.push("/") : null }
      <h1> Sign Up Here </h1>
      <p style = {matching ? {visibility:"visible"} : {visibility:"hidden"}} className="warning">This email is already taken</p>
      <form>
        <input placeholder="First Name" type="text" value={firstName} onChange={handleChangeFirstName}/>
        <input placeholder="Email Address" type="email" value={email} onChange={handleChangeEmail}/>
        <input placeholder="Password" type="password" value={password} onChange={handleChangePassword}/>
        <button onClick={Save}>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup