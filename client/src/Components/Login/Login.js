import React,{useContext} from "react";
import LoginState from "../CustomHooks/LoginState"
import {useHistory} from "react-router-dom"
import {StateContext} from "../Context/GlobalState"
import "./Login.css"


 function Signup(props) {

  const {login} = useContext(StateContext)

  const {email, password, handleChangeEmail, handleChangePassword, Save} = LoginState()

  const history = useHistory();
  

  


  return (
    <div>
    {login ? history.push("/") : null }
      <h1> Sign Up Here </h1>
      <form>
        <input placeholder="Email Address" type="email" value={email} onChange={handleChangeEmail}/>
        <input placeholder="Password" type="password" value={password} onChange={handleChangePassword}/>
        <button onClick={Save}>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup