import React from 'react'

function TopScreen({ pokeData,selectedIndex, typeColors }) {
    console.log(pokeData[selectedIndex].types[1].type.name)
    // console.log('topscreen index: ' + selectedIndex)
    function Capitalize (string) {
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
                        {Capitalize(pokeData[selectedIndex].name)}
                    </b>
                </div>
            </header>

            <div id="sprite">
                <img src={pokeData[selectedIndex].img_hd} alt="Sprite"></img>
            </div>

            <section id="info-section">

                <div>TYPE
                    <article>
                        {Capitalize(pokeData[selectedIndex].types[0].type.name)}
                    </article>
                    
                    {/* if second type exists, only then display it */}
                    {pokeData[selectedIndex].types.length > 0 ? 
                        <article>
                            {Capitalize(pokeData[selectedIndex].types[1].type.name)}    
                        </article>
                        : null
                    }
                </div>
                
                <div>
                    <article>HEIGHT</article>
                    {/* add logic for height calc */}
                    <article>{pokeData[selectedIndex].height * 10} cm</article>
                </div>
                <div>
                    <article>WEIGHT</article>
                    <article>{pokeData[selectedIndex].weight * 100 / 1000} kg</article>
                </div>


                {/* remember to fetch this data */}


                <p>With its flotation sac inflated,
                    it can carry people on its back.
                    It deflates the sac before it dives.</p>
            </section>

            <div id="stat">
                <article><b>O Obtained</b></article>
                <article><b>O Seen</b></article>
            </div>
            <div id="colorMint">
                <div></div>
            </div>
            <article id="index">
                <div><b>No.</b> </div>
                <div><b>{pokeData[selectedIndex].index}</b></div>
            </article>
        </div>
    )
}

export default TopScreen