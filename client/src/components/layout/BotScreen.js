import React, { useState } from "react";
import PokeCard from "../pokemon/PokeCard.js";
import { motion as m } from "framer-motion";

function BotScreen({
  pokeData,
  setSelectedIndex,
  obtainedStatus,
  setObtainedStatus,
}) {
  const [galleryIndex, setGalleryIndex] = useState({
    index: [0, 1, 2, 3, 4, 5],
    page: 0,
    numPages: Math.floor(pokeData.length / 6),
  });

  let pokeCards = [];
  for (let i = 0; i < 6; i++) {
    pokeCards.push(
      <PokeCard
        pokeData={pokeData[galleryIndex.index[i]]}
        //create a random key using uuid each comp declaration
        key={crypto.randomUUID()}
        // galleryIndex is passed as an object array of array, aka 2D array
        // id gives position of pokeCard 0-5 starting from top left
        id={galleryIndex.index[i]}
        setSelectedIndex={setSelectedIndex}
        numPoke={pokeData.length}
        obtainedStatus={obtainedStatus}
        setObtainedStatus={setObtainedStatus}
      />
    );
  }
  function changePage(buttonState, { page, numPages }) {
    setGalleryIndex((prevIndex) => {
      return {
        ...prevIndex,
        index: prevIndex.index.map((index) => {
          if (buttonState === "forward" && page <= numPages - 1) {
            return index + 6;
          } else if (buttonState === "backward" && page > 0) {
            return index - 6;
          } else {
            return index;
          }
        }),
        page: (function () {
          if (buttonState === "forward" && page <= numPages - 1) {
            return prevIndex.page + 1;
          } else if (buttonState === "backward" && page > 0) {
            return prevIndex.page - 1;
          } else {
            return prevIndex.page;
          }
        })(),
      };
    });
    // Another way to implement page change
    // else if(buttonState === "backward" && page > 0){
    //   setGalleryIndex(prevIndex => {
    //     return {
    //       ...prevIndex,
    //       index: prevIndex.index.map(index => index - 6),
    //       page: prevIndex.page - 1,
    //     }
    //   })
    // }
  }
  return (
    <div id="bot_screen">
      <m.div
        whileTap={{
          translateY: 5,
        }}
        id="back_button"
        onClick={() => changePage("backward", galleryIndex)}
      ></m.div>

      <div id="gallery">{pokeCards}</div>

      <m.div
        whileTap={{
          translateY: 5,
        }}
        id="forward_button"
        onClick={() => changePage("forward", galleryIndex)}
      ></m.div>
    </div>
  );
}

export default BotScreen;
