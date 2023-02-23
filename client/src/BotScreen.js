import React from 'react'
import Gallery from './Gallery.js'

function BotScreen({ pokeData }) {
  console.log(pokeData)
  return (
    <div id="bot_screen">
      <Gallery  pokeData = {pokeData}/>

      <div id="bg_color">
        <div></div>
      </div>

      <nav id="scroll">
        <article>Scroll bar</article>
        <button>L_Button</button>
        <button>R_button</button>
      </nav>

    </div>
  )
}

export default BotScreen
