import React,{useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import "../Courses.scss"


function Game(props) {

  let [match, setMatch] = useState([])
  const history = useHistory();
  function toMain(e) {
    e.preventDefault()
    history.push(props.urlHome)
  }

  let words = props.words

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

  return (
    <div className="main">
      <div className="progressBar">
        <progress value="100" max="100"></progress>
      </div>
      <div className="tableContainer">
        <table>
          {wordsTable}
        </table>
      </div>
      <div className="buttonContainer">
        <button onClick={toMain} className="cancel">Cancel</button>
        <button onClick={toMain} className="next">Next</button>
      </div> 
    </div>
    
  )
  
}

export default Game