import React from 'react'
import pokeball from '../../assets/pokeball_icon.png'

function PokeCard({ pokeData,id,changeSelectedIndex}) {

    function handleClick() {
        changeSelectedIndex(id)
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={pokeData.sprite} alt="PokeSprite" />
            <div>
                <img src={pokeball} alt="pokeball" />
                <article>{pokeData.index}</article>
            </div>
        </div>
    )
}

export default PokeCard

