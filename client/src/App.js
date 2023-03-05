import React, { useEffect, useState } from 'react'
import './App.css';
import TopScreen from './components/layout/TopScreen.js'
import BotScreen from './components/layout/BotScreen.js'
import Nav from './components/layout/Nav.js'


import Pokedex from './assets/Pokedex_1200x900.png'

const typeColors = {
  "rock": [182, 158, 49],
  "ghost": [112, 85, 155],
  "steel": [183, 185, 208],
  "water": [100, 147, 235],
  "grass": [116, 203, 72],
  "psychic": [251, 85, 132],
  "ice": [154, 214, 223],
  "dark": [117, 87, 76],
  "fairy": [230, 158, 172],
  "normal": [170, 166, 127],
  "fighting": [193, 34, 57],
  "flying": [168, 145, 236],
  "poison": [164, 62, 158],
  "ground": [222, 193, 107],
  "bug": [167, 183, 35],
  "fire": [245, 125, 49],
  "electric": [249, 207, 48],
  "dragon": [112, 55, 255]
}

function App() {
  //empty array of objects to store from api
  const [pokeData, setPokeData] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(2)
  const [galleryIndex, setGalleryIndex] = useState([10,11,12,13,14,15])

  function changeSelectedIndex (index){
    setSelectedIndex(index)
  }
  
  useEffect(() => {
    //"API" call from file WITHOUT backend
    console.log("fetching data api from json file")
    async function fetchData() {
      const res = await fetch("./api.json")//from public????
      const data = await res.json()
      setPokeData(data)
      console.log(data[0].ability)
    }
    fetchData()

    //API call from BACKEND

    // try {
    //   async function fetchData() {
    //     console.log("fetching data backend api")
    //     const res = await fetch("/api")
    //     const data = await res.json()
    //     // return data
    //     // .then(res => res.json())
    //     // .then(
    //     //   data => {
    //     //     console.log('data received from backend')
    //     //     console.log(data)
    //     //     setPokeData(data)
    //     // })
    //     setPokeData(data)
    //   }
    //   fetchData()

    // } catch (err) {
    //   console.log(err)
    // }
  }, [])

  //This useEffect handles topscreen sprite change when gallery clicked
  useEffect(() => {
    console.log('selected index' + selectedIndex)
  }, [selectedIndex])
  //This useEffect handles logic for updating gallery 
  useEffect(() => {
    
  })
  return (
    <div id="Container">
      <Nav />
      <div id="Pokedex">
        <img src={Pokedex} alt="pokedex png"></img>
        {pokeData ?
          <TopScreen
            pokeData={pokeData}
            selectedIndex={selectedIndex}
            typeColors={typeColors}
          />
          : null}
        {pokeData ?
          <BotScreen
            pokeData={pokeData}
            galleryIndex={[galleryIndex]}
            changeSelectedIndex={changeSelectedIndex}
            typeColors={typeColors}
          />
          : null}
      </div>
    </div>
  )
}

export default App;