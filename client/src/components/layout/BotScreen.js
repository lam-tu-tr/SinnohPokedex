import React from 'react'
import Gallery from '../pokemon/Gallery.js'

function BotScreen({ pokeData }) {
  return (
    <div id="bot_screen">
      <Gallery pokeData={pokeData} />

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
