import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

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
  const [emotion, setEmotion]= useState("happy");

  const [secondaryEmotion, setSecondaryEmotion] = useState("tired")

  // useEffect happens alongside render
  // if you want to be called only once, pass in dependency array - , []
  // or pass in array with state value - [emotion] to call function when state updates
  useEffect(() => {
    console.log(`It's ${emotion} right now`)
  }, [emotion])
  useEffect(() =>{
    console.log(`It's ${secondaryEmotion} around here`)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Current emotion is {emotion}
        </h1>
        <button onClick={() => setEmotion("sad")}>Sad</button>
        <button onClick={() => setEmotion("excited")}>Excited</button>
        <h2>Current secondary emotion is {secondaryEmotion}</h2>
        <button onClick={() => setSecondaryEmotion("stressed")}>Stressed</button>
      </header>
    </div>
  );
}

export default App;
