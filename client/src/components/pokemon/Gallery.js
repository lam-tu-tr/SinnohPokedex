import React from 'react'
import PokeCard from './PokeCard.js'
import pokeball from '../../assets/pokeball_icon.png'

function Gallery({ pokeData }) {
    return (
        <div id = "gallery">

            <div class = "card">
                <img src={pokeData[32].sprite} alt="Top left pokemon" />
                <div>
                    <img src={pokeball} alt ="pokeball"/>
                    <article>{pokeData[32].index}</article>
                </div>
            </div>
            <div class="card">
                <img src={pokeData[33].sprite} alt="Top pokemon" />
                <div>
                    <img src={pokeball} alt="pokeball" />
                    <article>{pokeData[33].index}</article>
                </div>
            </div>
            <div class="card">
                <img src={pokeData[34].sprite} alt="Top right pokemon" />
                <div>
                    <img src={pokeball} alt="pokeball" />
                    <article>{pokeData[34].index}</article>
                </div>
            </div>
            <div class="card">
                <img src={pokeData[35].sprite} alt="Bot left pokemon" />
                <div>
                    <img src={pokeball} alt="pokeball" />
                    <article>{pokeData[35].index}</article>
                </div>
            </div>
            <div class="card">
                <img src={pokeData[36].sprite} alt="Bot pokemon" />
                <div>
                    <img src={pokeball} alt="pokeball" />
                    <article>{pokeData[36].index}</article>
                </div>
            </div>
            <div class="card">
                <img src={pokeData[37].sprite} alt="Bot right pokemom" />
                <div>
                    <img src={pokeball} alt="pokeball" />
                    <article>{pokeData[37].index}</article>
                </div>
            </div>
        </div>
    )
}
export default Gallery