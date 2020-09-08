import React,{useContext} from "react";
import {useHistory} from "react-router-dom"
import {StateContext} from "../Context/GlobalState"
import "../Login/Login.css"

 function LoginCheck(props) {

  const {email, password, handleChangeEmail, handleChangePassword, Check,login, matching} = useContext(StateContext)

  const history = useHistory();
  
  return (
    <div>
    {login ? history.push("/") : null }
      <h1> Login here </h1>
      <p style = {matching ? {visibility:"visible"} : {visibility:"hidden"}} className="warning">Wrong credentials</p>
      <form>
        <input placeholder="Email Address" type="email" value={email} onChange={handleChangeEmail}/>
        <input placeholder="Password" type="password" value={password} onChange={handleChangePassword}/>
        <button onClick={Check}>Login</button>
      </form>
    </div>
  )
}

export default LoginCheck