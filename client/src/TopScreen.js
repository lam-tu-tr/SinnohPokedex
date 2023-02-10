import React from 'react'

function TopScreen({ pokeData }) {
    return (
        <div id="top_screen">
            <div id = "top_nav">
                <text>hi</text>
                <text>bye</text>
                <text>temp</text>
            </div>
            {pokeData[0].name}
        </div>
    )
}

export default TopScreen