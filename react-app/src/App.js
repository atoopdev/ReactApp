import logo from './logo.svg';
import './App.css';

// destructure an array
// assign variable name based on position in array
const [firstCity, secondCity, thirdCity]= [
  "New York",
  "Tokyo",
  "Berlin"
]

console.log(secondCity)

//instead of passing props, destructure the array to give just the value you want
function App({library}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from {library}.
        </p>
      </header>
    </div>
  );
}

export default App;
