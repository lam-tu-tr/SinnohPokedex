import React from 'react'

function TopScreen({ pokeData }) {
    return (
        <div id="top_screen">

            <header id = "top_nav">
                <text>caught</text>
                <text>seen</text>
                <text>sort</text>
            </header>

            <div id = "sprite">
                <img src={pokeData[2].img_hd} alt="Sprite"></img>
                <section>
                    {/* skills, use logic to display if exist */}
                    <div>skill1</div>
                    <div>skill2</div>
                    <div>skill3</div>
                    <div>skill4</div>
                </section>
            </div>

            <section id = "info-section">
                <nav>
                    <text>{pokeData[0].name}</text> 
                </nav>

                <div>TYPE
                    <article>Grass</article>
                    <article>Temp</article>
                </div>
                <div>
                    <article>HEIGHT</article>
                    {/* add logic for height calc */}
                    <article>{pokeData[0].height * 10} cm</article>
                </div>
                <div>
                    <article>WEIGHT</article>
                    <article>{pokeData[0].weight * 100/1000} kg</article>
                </div>
                <p>asdfoak asdfasd asdfasd</p>
            </section>

            <footer>
                <div>
                    <article>Obtained</article>
                    <article>Seen</article>
                </div>
                <h1>{pokeData[0].index}</h1>
            </footer>   
        </div>
    )
}

export default TopScreen