import React, { useEffect, useState } from "react";
import "./App.css";
import TopScreen from "./components/layout/TopScreen.js";
import BotScreen from "./components/layout/BotScreen.js";

import Pokedex from "./assets/Pokedex_1274x900.png";

const typeColorObj = {
  rock: [182, 158, 49],
  ghost: [112, 85, 155],
  steel: [183, 185, 208],
  water: [100, 147, 235],
  grass: [116, 203, 72],
  psychic: [251, 85, 132],
  ice: [154, 214, 223],
  dark: [117, 87, 76],
  fairy: [230, 158, 172],
  normal: [170, 166, 127],
  fighting: [193, 34, 57],
  flying: [168, 145, 236],
  poison: [164, 62, 158],
  ground: [222, 193, 107],
  bug: [167, 183, 35],
  fire: [245, 125, 49],
  electric: [249, 207, 48],
  dragon: [112, 55, 255],
};

function App() {
  //array of objects to store data from api
  const [pokeData, setPokeData] = useState(null);
  //topscreen poke index
  const [selectedIndex, setSelectedIndex] = useState(2);

  const [obtainedStatus, setObtainedStatus] = useState(true);

  useEffect(() => {
    //API call from BACKEND
    try {
      async function fetchData() {
        console.log("fetching data backend api");
        const res = await fetch("/api");
        const data = await res.json();

        setPokeData(data);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <main id="Container" className="background">
      <div id="Pokedex">
        <img src={Pokedex} alt="pokedex png"></img>

        <section id="screen">
          {pokeData ? (
            <TopScreen
              pokeData={pokeData}
              selectedIndex={selectedIndex}
              typeColorObj={typeColorObj}
            />
          ) : null}
          <aside></aside>
          {pokeData ? (
            <BotScreen
              pokeData={pokeData}
              setSelectedIndex={setSelectedIndex}
              obtainedStatus={obtainedStatus}
              setObtainedStatus={setObtainedStatus}
            />
          ) : null}
        </section>
      </div>
    </main>
  );
}

export default App;
