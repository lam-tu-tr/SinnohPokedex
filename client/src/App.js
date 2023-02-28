import React, { useEffect, useState } from 'react'
import './App.css';
import TopScreen from './components/layout/TopScreen.js'
import BotScreen from './components/layout/BotScreen.js'
import Nav       from './components/layout/Nav.js'

//add an array with pokemon type color scheme

import Pokedex from './assets/Pokedex_1200x900.png'
// const pokeData = [
//                     { "name": "torchic", 
//                     "ability": 
//                       [{ "ability": { "name": "blaze", "url": "https://pokeapi.co/api/v2/ability/66/" }, "is_hidden": false, "slot": 1 }, 
//                       { "ability": { "name": "speed-boost", "url": "https://pokeapi.co/api/v2/ability/3/" }, "is_hidden": true, "slot": 3 }], 
//                     "index": 255, 
//                     "img_hd": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/255.png", 
//                     "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png", 
//                     "types": [{ "slot": 1, "type": { "name": "fire", "url": "https://pokeapi.co/api/v2/type/10/" } }], 
//                     "weight": 25, 
//                     "height": 4 }]


function App() {
  //empty array of objects to store from api
  const [pokeData, setPokeData] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(32)
  const [galleryIndex, setGalleryIndex] = useState([0, 1, 2, 3, 4, 5])

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

  }, [selectedIndex])
  //This useEffect handles logic for updating gallery 
  useEffect(() => {

  })
  return (
    <div id="Container">
      <Nav />
      <div id="Pokedex">
        <img src={Pokedex} alt="pokedex png"></img>
        {pokeData ? <TopScreen 
                      pokeData={pokeData}
                      
                    /> : null}
        {pokeData ? <BotScreen 
                      pokeData={pokeData} 
                      galleryIndex={[galleryIndex]}
                    /> : null}
      </div>
    </div>
  )
}

export default App;