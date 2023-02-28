import React from 'react'
import PokeCard from '../pokemon/PokeCard.js'
function BotScreen({ pokeData, galleryIndex }) {
  
  return (
    <div id="bot_screen">
      {/* <Gallery pokeData={pokeData} /> */}

      <div id="gallery">
        {/* // galleryIndex is passed as an object array of array, aka 2D array */}
        {galleryIndex[0].map(pokemon => 
          (<PokeCard pokeData={pokeData[pokemon]} />)
        )}
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
