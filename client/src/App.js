import React from 'react'
import './App.css';
import TopScreen from './TopScreen.js'
import BotScreen from './BotScreen.js'
import Nav from './Nav.js'

import Pokedex from './assets/Pokedex_1200x900.png'
// const pokeData = [{ "name": "turtwig", 
//                     "ability": 
//                       [{ "ability": { "name": "overgrow", "url": "https://pokeapi.co/api/v2/ability/65/" }, "is_hidden": false, "slot": 1 }, 
//                       { "ability": { "name": "shell-armor", "url": "https://pokeapi.co/api/v2/ability/75/" }, "is_hidden": true, "slot": 3 }],
//                     "index": 387, 
//                     "img_hd": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/387.png", 
//                     "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png", 
//                     "types": [{ "slot": 1, "type": { "name": "grass", "url": "https://pokeapi.co/api/v2/type/12/" } }], 
//                     "weight": 102, 
//                     "height": 4 }, 
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
  const [pokeData, setPokeData] = React.useState(null)
  console.log("App")
  React.useEffect(() => {
    //"API" call from file WITHOUT backend
    console.log("fetching data api from json file")
    async function fetchData() {
      const res = await fetch("./api.json")
      const data = await res.json()
      setPokeData(data)
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

  return (
    <div id="Container">
      <Nav />
      <div id="Pokedex">
        <img src={Pokedex} alt="pokedex png"></img>
        {pokeData && <TopScreen pokeData= {pokeData} />}
        {pokeData && <BotScreen pokeData= {pokeData} />}
      </div>
    </div>
  )
}

export default App;