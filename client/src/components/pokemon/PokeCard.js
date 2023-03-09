import React from 'react'
import pokeball from '../../assets/pokeball_icon.png'

function PokeCard({ pokeData, id, setSelectedIndex, numPoke }) {

    return (
        <div className="card" onClick={() => setSelectedIndex(id)} style={id === numPoke ? {visibility: 'hidden'}: {} }>
            { id < numPoke && <img src={pokeData.sprite} alt="PokeSprite" />}
            { id < numPoke &&
                <div>
                    <img src={pokeball} alt="pokeball" className='pokeball'/>
                    <article>{pokeData.index}</article>
                </div>
            }
        </div>
    )

}

export default PokeCard

