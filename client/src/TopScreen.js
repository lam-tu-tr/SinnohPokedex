import React from 'react'

function TopScreen({pokeData}) {
    return (
        <div id="top_screen">

            <header id = "top_nav">
                <div>caught</div>
                <div>seen</div>
                <div>sort</div>
            </header>

            <div id = "sprite">
                <img src={pokeData[30].img_hd} alt="Sprite"></img>
                <section>
                    {/* skills, display multiple abilities if exist */}
                    {pokeData[9].ability.map(ability => <div>{ability.ability.name}</div>)}
                </section>
            </div>

            <section id = "info-section">
                <nav>
                    <div>{pokeData[1].name}</div> 
                </nav>

                <div>TYPE
                    <article>{pokeData[1].name}</article>
                    <article>Temp</article>
                </div>
                <div>
                    <article>HEIGHT</article>
                    {/* add logic for height calc */}
                    <article>{pokeData[1].height * 10} cm</article>
                </div>
                <div>
                    <article>WEIGHT</article>
                    <article>{pokeData[1].weight * 100/1000} kg</article>
                </div>
                <p>asdfoak asdfasd asdfasd</p>
            </section>

            <footer>
                <div>
                    <article>O Obtained</article>
                    <article>O Seen</article>
                </div>
                <article><b>no. {pokeData[1].index}</b></article>
            </footer>   
        </div>
    )
}

export default TopScreen