import React, {useState,useEffect} from "react"
import {useLocation} from "react-router-dom"
const StateContext = React.createContext()

function StateContextProvider(props) {
    const [login, setLogin] = useState(null)
    const [user, setUser] = useState([])
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tempName, setTempName] = useState("")
    const [matching, setMatching] = useState(false)
    let [match, setMatch] = useState([])
    // const [selectedCourse, setSelectedCourse] = useState("")
    

    const words = [
        {
          "la bolsa de hielo": "ice pack",
          "el médico": "doctor"
        },
        {
          "la muleta": "crutch",
          "la medicina" : "medicine" 
        },
        {
          "el salpullido": "rash",
          "alta presión sanguínea": "high blood pressure" 
        },
        {
          "la cortada": "cut",
          "el resfriado": "cold" 
        }
    ]

    let location = useLocation()

    const CoursesData = [
        {
            id:1,
            urlVideo:"/course1/video",
            urlGame:"/course1/game",
            urlHome:"/course1/",
            h1:"SpanishForProfessionals",
            h3:"Learning Spanish with <b>SpanishForProfessionals</b> is entirely free. We are available for classroom or home with dozens of games, coloring pages and interactive activities ordered by levels that you can access anytime in tablets or desktops.",
            p:"After completion of each part, just click on the NEXT button to go forward",
            VideoSrc:"https://www.youtube.com/embed/t7-nb1wlnyA",
            ImgSrc:"https://bit.ly/2QjsSnr"
        },
        {
            id:2,
            urlVideo:"/course2/video",
            urlGame:"/course2/game",
            urlHome:"/course2/"
        },
        {
            id:3,
            urlVideo:"/course3/video",
            urlGame:"/course3/game",
            urlHome:"/course3/"
        }
    ]

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

    let tableCells = document.querySelectorAll('td')

    function ClickEvent(e) {
        e.preventDefault()
        let currentValue = e.currentTarget.innerHTML
        setMatch(match.length < 2 ? [...match,currentValue] : []) 
    }

    useEffect(() => {
        for(let i = 0; i < words.length; i++) {
        Object.entries(words[i]).map(([key, value]) => match.includes(key)&&match.includes(value)?
        Array.from(tableCells).find(item=> match.includes(item.innerHTML)?item.innerHTML=null:"")
        :"")
        }  
    }, [match])

    const wordsTable = words.map(item => 
        <tr>
        <td style = {{backgroundColor:"black"}}onClick={ClickEvent}>{Object.keys(item)[0]}</td>
        <td style = {{backgroundColor:"red"}}onClick={ClickEvent}>{Object.values(item)[1]}</td>
        <td style = {{backgroundColor:"black"}}onClick={ClickEvent}>{Object.keys(item)[1]}</td>
        <td style = {{backgroundColor:"red"}}onClick={ClickEvent}>{Object.values(item)[0]}</td>
        </tr> 

    )

     
    
    function Save(event) {
        event.preventDefault()
        
        let existing = JSON.parse(localStorage.getItem("user"))
        let tempMatch = ""
        if (existing !== null && existing.some(item=>item.email===email) ) {
            setMatching(true)
            tempMatch = true
        } else {setMatching(false) }
        
        if (!tempMatch) {
            localStorage.setItem("user", JSON.stringify([...user,{firstName, email, password}]))
            setUser([...user, {firstName,email,password}])
            toggleLogin()
        } 
        
        setFirstName("")
        setEmail("")
        setPassword("")

    }

    function Check(event) {
        event.preventDefault()
        let existing = JSON.parse(localStorage.getItem("user"))
        if (existing !== null && existing.some(item=>item.email===email && item.password===password) ) {
            toggleLogin()
        }else setMatching(true)

        existing.map(item=>item.email===email?setTempName(item.firstName):"")
        setEmail("")
        setPassword("")
        
    }

    useEffect(() => {
        setMatching(false)
    }, [location])

    
    function Logout(event) {
        event.preventDefault()
        toggleLogin()
        setTempName("")
    }

    return (
        <StateContext.Provider value={{login, toggleLogin, user, tempName, firstName, email, password, 
        handleChangeEmail, handleChangePassword,handleChangeFirstName, Save, Check, Logout, matching,CoursesData,wordsTable}}>
            {props.children}
        </StateContext.Provider>
    )
}

export {StateContextProvider, StateContext}