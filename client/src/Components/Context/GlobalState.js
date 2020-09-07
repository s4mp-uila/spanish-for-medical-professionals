import React, {Component, useState} from "react"
const StateContext = React.createContext()

function StateContextProvider(props) {
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState([])
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tempName, setTempName] = useState("")


    function handleChangeFirstName(event) {
        setFirstName(event.target.value)
        setTempName(event.target.value)
    }
    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }
    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    function toggleLogin() {
        setLogin(!login)
    }
    
    function Save(event) {
        event.preventDefault()
        toggleLogin()
        // let users = JSON.parse(localStorage.getItem("user"))
        localStorage.setItem("user", JSON.stringify([...user,[firstName, email, password]]));
        setUser([...user, [firstName,email,password]])
        setFirstName("")
        setEmail("")
        setPassword("")
    }
    
    function Logout(event) {
        event.preventDefault()
        toggleLogin()
        setTempName("")
    }

    return (
        <StateContext.Provider value={{login, toggleLogin, user, tempName, firstName, email, password, 
        handleChangeEmail, handleChangePassword,handleChangeFirstName, Save, Logout}}>
            {props.children}
        </StateContext.Provider>
    )
}

export {StateContextProvider, StateContext}