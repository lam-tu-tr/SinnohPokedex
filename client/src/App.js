import React, {useEffect, useState} from 'react'
import './App.css';
import Top_scr from './top_scr.js'
import Bot_scr from './bot_scr.js'

import Pokedex from './assets/Pokedex_1200x900.png'

function App() {
  const [backendData, setBackendData] = useState([{}])        //empty array of objects to store from api

  useEffect(() => {
    fetch("/api").then(
      res => res.json())
    .then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div id = "Container">
      <div id = "Pokedex">
        <img src={Pokedex} ></img>       
        <Top_scr />
        <Bot_scr />
      </div>
    </div>
  )
}

export default App