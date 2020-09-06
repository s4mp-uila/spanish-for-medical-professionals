import {useState, useContext} from "react"
// import { useEffect } from "react"
import {StateContext} from "../Context/GlobalState"



function CustomHook3(props) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
//   const [login, setLogin] = useState(false)
  const {login, toggleLogin} = useContext(StateContext)
  
  


  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }
  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  function Save(event) {
    event.preventDefault()
    toggleLogin()
    localStorage.setItem(email, password);
    setEmail("")
    setPassword("")
  }

  


  
  
  

//   function Check(event) {
//     event.preventDefault()
//     localStorage.getItem(email) === password ? setLogin(true) : setLogin(false)
//     setEmail("")
//     setPassword("")
//     setTimeout(function(){ setLogin(false); }, 10000);
//   }
  

  return {email, password, handleChangeEmail, handleChangePassword, Save, login}

  }

  

export default CustomHook3 