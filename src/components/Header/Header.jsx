import {React, useState} from "react";
import "../../styles/App.css"
import logo from '../../assets/logo.svg';
import smth from '../../assets/smth.svg';

export const Header = ({name, day, number}) => {
  const [storedNumber, setStoredNumber] = useState(number);

  const handleClickPlusOne = () => {
    setStoredNumber(prev => prev+1)
  }
  const handleClickMinusTen = () => {
    setStoredNumber(prev => prev-10)
  }

  console.log(storedNumber)
  
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Hello new student - {name}
    </p>
    {storedNumber <= 10 ? (
      <p>
        Today is {day}
      </p>
    ) : (
      <p>
        I hate {day}
      </p>
    )}

    <button onClick={handleClickPlusOne}>Click ME!!!</button>
    <button onClick={handleClickMinusTen}>Click ME TOOOO!!!</button>
      
      <h1>{storedNumber}</h1>
    
    {/* <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a> */}
  </header>
  )
}