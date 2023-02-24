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

      <button id = "back_button">L_Button</button>
      <button id = "forward_button">R_button</button>

      <nav id="scroll">
        <article>Scroll bar</article>
      </nav>

    </div>
  )
}

export default BotScreen
