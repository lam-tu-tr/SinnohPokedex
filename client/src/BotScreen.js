import React from 'react'

function BotScreen({pokeData}) {
  return (
    <div id="bot_screen">
      {pokeData[0].name}
    </div>
  )
}

export default BotScreen
