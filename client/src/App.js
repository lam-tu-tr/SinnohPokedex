import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import TopScreen from "./components/layout/TopScreen.js";
import BotScreen from "./components/layout/BotScreen.js";
import Nav from "./components/layout/Nav.js";

import Pokedex from "./assets/Pokedex_1200x900.png";
import AppContextWrapper, { AppContext } from "./AppContext";



function App() {


    return (
        <AppContextWrapper>
            <div id="Container">
                <Nav />
                <div id="Pokedex">
                    <img src={Pokedex} alt="pokedex png"></img>
                    <InnerApp />
                </div>
            </div>
        </AppContextWrapper>
    );
}

const InnerApp = () => {
    const { pokeData } = useContext(AppContext)

    return pokeData && <><TopScreen /><BotScreen /></>
}

export default App;
