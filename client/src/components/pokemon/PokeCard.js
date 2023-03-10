import React from 'react'
import pokeball from '../../assets/pokeball_icon.png'

function PokeCard({ pokeData, id, setSelectedIndex, numPoke }) {

    const style = {
        visibility: (id === numPoke ? 'hidden': {}),
        animationName: 'pokeballHover'
    }
    return (
        <div 
            className="card .pokeballHover" 
            onClick={() => setSelectedIndex(id)} 
            
            style={style}
        >
            {id < numPoke && <img src={pokeData.sprite} alt="PokeSprite" />}
            {id < numPoke &&
                <div>
                    <img src={pokeball} alt="pokeball" className='pokeball' />
                    <article>{pokeData.index}</article>
                </div>
            }
        </div>
    )

}

export default PokeCard

