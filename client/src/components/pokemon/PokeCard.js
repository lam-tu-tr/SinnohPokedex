import React from 'react'
import pokeball from '../../assets/pokeball_icon.png'

function PokeCard({pokeData}) {
    return (
        <React.Fragment>
            <div className="card">
                <img src={pokeData.sprite} alt="Top left pokemon" />
                <div>
                    <img src={pokeball} alt="pokeball" />
                    <article>{pokeData.index}</article>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PokeCard

