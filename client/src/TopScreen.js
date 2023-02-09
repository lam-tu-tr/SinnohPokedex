import React from 'react'

function TopScreen({ pokeData }) {
    return (
        <div id="top_screen">
            {pokeData[0].name}
        </div>
    )
}

export default TopScreen