import React from "react";
import pokeball from "../../assets/pokeball_icon.png";
import { motion as m } from "framer-motion";

function TopScreen({ pokeData, selectedIndex, typeColorObj }) {
  const { name, img_hd, types, height, weight, index, flavor_text } =
    pokeData[selectedIndex];

  function Capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div id="top_screen">
      <header>
        <b>{Capitalize(name)}</b>
      </header>

      <div id="main_body">
        <m.div id="sprite" whileHover={{ scale: 1.1 }}>
          <img
            src={img_hd}
            alt="Sprite"
            style={{ filter: `drop-shadow(4px 2px 1px rgba(0, 0, 0, 0.5)  )` }}
          ></img>
        </m.div>

        <section id="info-section">
          <div>
            TYPE
            <span
              style={{
                backgroundColor: `rgb(${typeColorObj[types[0].type.name]})`,
              }}
              className="type"
            >
              {Capitalize(types[0].type.name)}
            </span>
            {/* if second type exists, only then display it */}
            {types.length > 1 ? (
              <span
                style={{
                  backgroundColor: `rgb(${typeColorObj[types[1].type.name]})`,
                }}
                className="type"
              >
                {Capitalize(types[1].type.name)}
              </span>
            ) : null}
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
            <span>{(weight * 100) / 1000} kg</span>
          </div>

          {/* remember to fetch this paragraph data */}
          <p>{flavor_text}</p>
        </section>
      </div>

      <div id="stat">
        <span>
          <img src={pokeball} alt="pokeball" className="pokeball"></img>
          <b> Obtained</b>
        </span>
      </div>

      <article id="index">
        <div>
          <b>No. </b>
        </div>
        <div>
          <b>{index}</b>
        </div>
      </article>

      <div id="colorMint">
        <div></div>
      </div>
      <div id="colorRed">
        <div></div>
      </div>
      <div id="colorBlue"></div>
    </div>
  );
}

export default TopScreen;
