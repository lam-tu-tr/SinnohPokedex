import React from 'react'

function Gallery({ pokeData }) {
    console.log(pokeData)
    return (
        <div id = "gallery">

            <div id = "top_left_poke" class = "card">
                <img src={pokeData[32].sprite} alt="Top left pokemon" />
                <div>
                    <span>icon</span>
                    <article>{pokeData[32].index}</article>
                </div>
            </div>
            <div id="top_poke" class="card">
                <img src={pokeData[33].sprite} alt="Top pokemon" />
                <div>
                    <span>icon</span>
                    <article>{pokeData[33].index}</article>
                </div>
            </div>
            <div id="top_right_poke" class="card">
                <img src={pokeData[34].sprite} alt="Top right pokemon" />
                <div>
                    <span>icon</span>
                    <article>{pokeData[34].index}</article>
                </div>
            </div>
            <div id="bot_left_poke" class="card">
                <img src={pokeData[35].sprite} alt="Bot left pokemon" />
                <div>
                    <span>icon</span>
                    <article>{pokeData[35].index}</article>
                </div>
            </div>
            <div id="bot_poke" class="card">
                <img src={pokeData[36].sprite} alt="Bot pokemon" />
                <div>
                    <span>icon</span>
                    <article>{pokeData[36].index}</article>
                </div>
            </div>
            <div id="bot_right_poke" class="card">
                <img src={pokeData[37].sprite} alt="Bot right pokemom" />
                <div>
                    <span>icon</span>
                    <article>{pokeData[37].index}</article>
                </div>
            </div>
        </div>
        
    )
}
export default Gallery