import logo from './logo.svg';
import './App.css';
import {useState} from "react"
// import {useRef} from 'react'
// import {useReducer} from "react"
// import {useState, useEffect} from "react";

// destructure an array
// assign variable name based on position in array
// const [firstCity, secondCity, thirdCity]= [
//   "New York",
//   "Tokyo",
//   "Berlin"
// ]

// console.log(secondCity)

//instead of passing props, destructure the array to give just the value you want
function App() {
  // set state value will be initial one when loaded
  // const [emotion, setEmotion]= useState("happy");

  // const [secondaryEmotion, setSecondaryEmotion] = useState("tired")

  // useEffect happens alongside render
  // if you want to be called only once, pass in dependency array - , []
  // or pass in array with state value - [emotion] to call function when state updates
  // note - can pass two values if only want to see when both values update 
  // useEffect(() => {
  //   console.log(`It's ${emotion} right now`)
  // }, [emotion])
  // useEffect(() =>{
  //   console.log(`It's ${secondaryEmotion} around here`)
  // }, [])

  // const [checked, setChecked] = useReducer((checked) => !checked, false)
  // uncontrolled component
  // const txtTitle = useRef()
  // const hexColor = useRef()

  // controlled form elements use state values
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#000000")
  // upon submit
  const submit = (e) => {
    e.preventDefault()
    // const title = txtTitle.current.value;
    // const color = hexColor.current.value;
    alert(`${title}, ${color}`)
    // clear form after submit
    setTitle("")
    setColor("#000000")
    // // after display reset
    // txtTitle.current.value = ""
    // hexColor.current.value = ""
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>
          Current emotion is {emotion}
        </h1>
        <button onClick={() => setEmotion("sad")}>Sad</button>
        <button onClick={() => setEmotion("excited")}>Excited</button>
        <h2>Current secondary emotion is {secondaryEmotion}</h2>
        <button onClick={() => setSecondaryEmotion("stressed")}>Stressed</button> */}
      {/* <input type="checkbox" value={checked} 
      onChange={setChecked}
      />
      <label>{checked ? "checked" : "not checked"}</label> */}
      {/* <form onSubmit={submit}>
        <input ref={txtTitle} type="text" placeholder="color title..."></input>
        <input ref={hexColor} type="color"></input>
        <button>Add</button>
      </form> */}

<form onSubmit={submit}>
        <input value={title} onChange={
          (event) =>
          setTitle(event.target.value)
        }
        type="text" placeholder="color title..."></input>
        <input value={color} onChange={
          (event) =>
          setColor(event.target.value)
        }
        type="color"></input>
        <button>Add</button>
      </form>
      </header>
    </div>
  );
}

export default App;
