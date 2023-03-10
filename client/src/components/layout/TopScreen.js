import React from 'react'
import pokeball from '../../assets/pokeball_icon.png'

function TopScreen({ pokeData, selectedIndex, typeColorObj }) {

    const { name, img_hd, types, height, weight, index } = pokeData[selectedIndex]

    function Capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div id="top_screen">

            <div id="colorRed">
                <div></div>
            </div>
            <div id="color3"></div>

            <header>
                <div>
                    <b>
                        {Capitalize(name)}
                    </b>
                </div>
            </header>

            <div id="sprite">
                <img src={img_hd} alt="Sprite" style={{ filter: `drop-shadow(4px 2px 1px rgba(0, 0, 0, 0.5)  )` }}></img>
            </div>

            <section id="info-section">

                <div>TYPE
                    <span
                        style={{ backgroundColor: `rgb(${typeColorObj[types[0].type.name]})` }}
                        className="type"
                    >
                        {Capitalize(types[0].type.name)}
                    </span>

                    {/* if second type exists, only then display it */}
                    {types.length > 1 ?
                        <span
                            style={{ backgroundColor: `rgb(${typeColorObj[types[1].type.name]})` }}
                            className="type"
                        >
                            {Capitalize(types[1].type.name)}
                        </span>
                        : null
                    }
                </div>

                <hr></hr>

                <div>
                    <span>HEIGHT</span>
                    {/* add logic for height calc */}
                    <span>{height * 10} cm</span>
                </div>

                <hr></hr>
                
                <div>
                    <span>WEIGHT</span>
                    <span>{weight * 100 / 1000} kg</span>
                </div>


                {/* remember to fetch this paragraph data */}
                <p>With its flotation sac inflated,
                    it can carry people on its back.
                    It deflates the sac before it dives.</p>
            </section>

            <div id="stat">

                <span>
                    <img src={pokeball} alt="pokeball" className='pokeball'></img>
                    <b> Obtained</b>
                </span>
            </div>
            <div id="colorMint">
                <div></div>
            </div>
            <article id="index">
                <div><b>No.</b> </div>
                <div><b>{index}</b></div>
            </article>
        </div>
    )
}

export default TopScreen