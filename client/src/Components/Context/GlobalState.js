import React, {useState} from "react"
const StateContext = React.createContext()

function StateContextProvider(props) {
    const [login, setLogin] = useState(null)
    const [user, setUser] = useState([])
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tempName, setTempName] = useState("")
    const [matching, setMatching] = useState(false)
    


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
        
        let existing = JSON.parse(localStorage.getItem("user"))
        let tempMatch = ""
        if (existing !== null && existing.some(item=>item[1]===email) ) {
            setMatching(true)
            tempMatch = true
        } else {setMatching(false) }
        
        if (!tempMatch) {
            localStorage.setItem("user", JSON.stringify([...user,[firstName, email, password]]))
            setUser([...user, [firstName,email,password]])
            toggleLogin()
        } 
        
        setFirstName("")
        setEmail("")
        setPassword("")

    }

    function Check(event) {
        event.preventDefault()
        let existing = JSON.parse(localStorage.getItem("user"))
        if (existing !== null && existing.some(item=>item[1]===email && item[2]===password) ) {
            toggleLogin()
        }
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
        handleChangeEmail, handleChangePassword,handleChangeFirstName, Save, Check, Logout, matching}}>
            {props.children}
        </StateContext.Provider>
    )
}

export {StateContextProvider, StateContext}