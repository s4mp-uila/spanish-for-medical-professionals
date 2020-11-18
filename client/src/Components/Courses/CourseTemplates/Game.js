import React,{useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import "../Courses.scss"


function Game(props) {

  
  const history = useHistory();
  function toMain(e) {
    e.preventDefault()
    history.push(props.urlHome)
  }




  // The FlashCard Game logic below:
  let [match, setMatch] = useState([])
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


    // The TranslateThis Game logic below:
    let translate = props.translate
    let initialWord = props.word
    let correct = props.correct
    const [word, setWord] = useState(initialWord)
    const [check, setCheck] = useState([])
    const [solution, setSolution] = useState(false)
    
    function handleClick(e) {
      setCheck([...check, e.target.innerHTML])
      setWord(word.filter(item=>item!==e.target.innerHTML))
    }
    function removeThis(e) {
      setCheck(check.filter(item=>item!==e.target.innerHTML))
      setWord([...word, e.target.innerHTML])
    }
    function reload() {
      setCheck([])
      setWord(initialWord)
    }
    function checkSolution() {
      const rightSentence = correct.split(" ")
      const equal = rightSentence.length === check.length && rightSentence.every((value, index) => value === check[index])
      equal ? setSolution(true) : setSolution(false)
    }
    const visible =  solution ? {visibility: "visible"} : {visibility: "hidden"}





  return (
    <div className="main">
      <div className="progressBar">
        <progress value="100" max="100"></progress>
      </div>
      {words.length > 0 ? <div className="tableContainer">
        <table>
          {wordsTable}
        </table>
      </div>:""}
      {initialWord.length > 0 ? <div className="tableContainer">
        <h1>Translate This in Spanish: <h2>{translate}</h2></h1>
        <div className="sandbox">
          {check.map(item=><span onClick={removeThis}>{item}</span>)}
        </div>
        <div className="pickContainer">
          {word.map(item => <span onClick={handleClick}>{item}</span>)}
        </div>
        <p className="succesMessage" style={visible}>Success!</p>
        <button onClick={checkSolution}>Check Your Solution</button>
        <button className="reload" onClick={reload}>Reload words</button>
      </div>:""}
      <div className="buttonContainer">
        <button onClick={toMain} className="cancel">Cancel</button>
        <button onClick={toMain} className="next">Next</button>
      </div> 
    </div>
    
  )
  
}

export default Game