import React from 'react'

function TopScreen({pokeData}) {
    return (
        <div id="top_screen">

            <div id="color2"></div>
            
            <header id = "top_nav">
                <div>caught</div>
                <div>seen</div>
                <div>sort</div>
            </header>

            <div id = "sprite">
                <img src={pokeData[32].img_hd} alt="Sprite"></img>
            </div>

            <section id = "ability">
                {/* skills, display multiple abilities if exist */}
                {pokeData[9].ability.map(ability => <div>{ability.ability.name}</div>)}
            </section>
            

            <section id = "info-section">

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

            <div id = "stat">
                <article><b>O Obtained</b></article>
                <article><b>O Seen</b></article>
            </div>

            <div id="color1"></div>

            <article id="index">
                <div><b>No.</b> </div> 
                <div><b>{pokeData[1].index}</b></div>
            </article>
            
        </div>
    )
}

export default TopScreen