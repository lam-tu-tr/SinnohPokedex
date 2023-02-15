import React from 'react'

function BotScreen({pokeData}) {
  console.log(pokeData)
  return (
    <div id="bot_screen">
      <section id = "gallery">
        <div>
          <img src={pokeData[1].sprite} alt="Top left pokemon" />
          <div>
            <article>icon</article>
            <article>{pokeData[1].index}</article>
          </div>
        </div>
        <div>
          <img src={pokeData[1].sprite} alt="Top pokemon" />
          <div>
            <article>icon</article>
            <article>{pokeData[1].index}</article>
          </div>
        </div>
        <div>
          <img src={pokeData[1].sprite} alt="Top right pokemon" />
          <div>
            <article>icon</article>
            <article>{pokeData[1].index}</article>
          </div>
        </div>
        <div>
          <img src={pokeData[1].sprite} alt="Bot left pokemon" />
          <div>
            <article>icon</article>
            <article>{pokeData[1].index}</article>
          </div>
        </div>
        <div>
          <img src={pokeData[1].sprite} alt="Bot pokemon" />
          <div>
            <article>icon</article>
            <article>{pokeData[1].index}</article>
          </div>
        </div>
        <div>
          <img src={pokeData[1].sprite} alt="Bot right pokemom" />
          <div>
            <article>icon</article>
            <article>{pokeData[1].index}</article>
          </div>
        </div>
      </section>
      
      <nav id = "scroll">
        <article>Scroll bar</article>
        <button>L_Button</button>
        <button>R_button</button>
      </nav>

    </div>
  )
}

export default BotScreen
