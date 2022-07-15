import logo from './logo.svg';
import './App.css';
import {useState} from "react";

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current emotion is {emotion}
        </p>
        <button onClick={() => setEmotion("sad")}>Sad</button>
      </header>
    </div>
  );
}

export default App;
