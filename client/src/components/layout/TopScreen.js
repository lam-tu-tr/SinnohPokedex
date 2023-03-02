import React from 'react'

function TopScreen({ pokeData,selectedIndex, typeColors }) {
    return (
        <div id="top_screen">

            <div id="colorRed">
                <div></div>
            </div>
            <div id="color3"></div>


            <header>
                <div>
                    <b>
                        {pokeData[32].name.charAt(0).toUpperCase()
                            + pokeData[32].name.slice(1)}
                    </b>
                </div>
            </header>

            <div id="sprite">
                <img src={pokeData[32].img_hd} alt="Sprite"></img>
            </div>

            <section id="info-section">

                <div>TYPE
                    <article>Fire</article>
                    <article>Water</article>
                </div>
                <div>
                    <article>HEIGHT</article>
                    {/* add logic for height calc */}
                    <article>{pokeData[32].height * 10} cm</article>
                </div>
                <div>
                    <article>WEIGHT</article>
                    <article>{pokeData[32].weight * 100 / 1000} kg</article>
                </div>
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
                <div><b>{pokeData[32].index}</b></div>
            </article>
        </div>
    )
}

export default TopScreen