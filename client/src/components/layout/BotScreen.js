import React, { useEffect } from 'react'
import PokeCard from '../pokemon/PokeCard.js'
function BotScreen({ 
  pokeData,
  galleryIndex,
  setSelectedIndex,
  typeColors }) {
  
    let pokeCards = []
    for(let i = 0; i < 6; i++){
      pokeCards.push(
        (<PokeCard
          pokeData={pokeData[galleryIndex[0][i]]}
          //create a random key using uuid each comp declaration
          key={crypto.randomUUID()}
          // galleryIndex is passed as an object array of array, aka 2D array
          // id gives position of pokeCard 0-5 starting from top left
          id={galleryIndex[0][i]}
          // selectedIndex={setSelectedIndex}
          setSelectedIndex={setSelectedIndex}
        />)
      )
    }

    return (
      <div id="bot_screen">

        <div id="gallery">
          {pokeCards}
          {/* Note: cannot use for loop inside here */}
        </div>

        <div id="bg_color">
          <div></div>
        </div>

        <button id="back_button"></button>
        <button id="forward_button"></button>

        <nav id="scroll">
          <article>Scroll bar</article>
        </nav>

      </div>
    )
}

export default BotScreen
