import React from "react";
import pokeball from "../../assets/pokeball_icon.png";
import { motion as m } from "framer-motion";

function PokeCard({
  pokeData,
  id,
  setSelectedIndex,
  numPoke,
  obtainedStatus,
  setObtainedStatus,
}) {
  const style = {
    visibility: id === numPoke ? "hidden" : {},
    animationName: "pokeballHover",
  };
  return (
    <m.div
      className="card"
      onClick={() => setSelectedIndex(id)}
      style={style}
      whileHover={{
        translateY: -5,
      }}
      drag
      dragSnapToOrigin={true}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
      dragPropagation
    >
      {id < numPoke && (
        <img className="card_sprite" src={pokeData.sprite} alt="PokeSprite" />
      )}
      {id < numPoke && (
        <div className="card_info">
          <div
            onClick={() =>
              setObtainedStatus((prevStatus) => {
                console.log(prevStatus);
                return !prevStatus;
              })
            }
          >
            {obtainedStatus === true ? (
              <m.img
                src={pokeball}
                alt="card_pokeball"
                className="card_pokeball"
                whileHover={{
                  translateX: [0, -1, 1, 0],
                  rotate: [0, -30, 30, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                  },
                }}
                whileTap={{
                  translateY: 5,
                }}
              />
            ) : (
              <div
                className="card_pokeball"
                style={{
                  backgroundColor: "gray",
                  borderRadius: "20px",
                }}
              ></div>
            )}
          </div>
          <article>{pokeData.index}</article>
        </div>
      )}
    </m.div>
  );
}

export default PokeCard;
