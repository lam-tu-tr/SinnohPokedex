import React from 'react'
import pokeball from '../../assets/pokeball_icon.png'

function PokeCard({pokeData,id,setSelectedIndex}) {

    return (
        <div className="card" onClick={() => setSelectedIndex(id)}>
            <img src={pokeData.sprite} alt="PokeSprite" />
            <div>
                <img src={pokeball} alt="pokeball" className='pokeball'/>
                <article>{pokeData.index}</article>
            </div>
        </div>
    )
}

export default PokeCard

