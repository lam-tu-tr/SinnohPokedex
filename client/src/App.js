import React, { useEffect, useState } from 'react'
import './App.css';
import TopScreen from './TopScreen.js'
import BotScreen from './BotScreen.js'
import Nav from './Nav.js'


import Pokedex from './assets/Pokedex_1200x900.png'

function App() {
  const [pokeData, setPokeData] = useState([{}])        //empty array of objects to store from api
  let temp = 0
  useEffect(() => {
    // try{
      async function fetchData () {
        const res = await fetch("/api")
        const data = await res.json()
        // .then(res => res.json())
        // .then(
        //   data => {
        //     console.log('data received from backend')
        //     console.log(data)
        //     setPokeData(data)
        // })
        setPokeData(data)
        console.log(data)
      }
      fetchData()

    // } catch (err) {
    //   console.log(err)
    // }
  }, [])

  return (
    <div id="Container">
      <Nav />
      <div id="Pokedex">
        <img src={Pokedex} alt="pokedex png"></img>
        <TopScreen pokeData = {pokeData} />
        <BotScreen pokeData = {pokeData} />
      </div>
    </div>
  )
}

export default App