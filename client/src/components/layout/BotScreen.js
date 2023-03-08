import React, { useEffect, useState } from "react";
import PokeCard from "../pokemon/PokeCard.js";

function BotScreen({ pokeData, setSelectedIndex }) {
  console.log(pokeData)
  const [galleryIndex, setGalleryIndex] = useState({
    index: [0, 1, 2, 3, 4, 5],
    page: 0,
    numPages: pokeData.length / 6
  })

  // // console.log(galleryIndex.currentPage)
  // console.log(pokeData[galleryIndex.currentIndex[0]])

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
        // selectedIndex={setSelectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    );
  }
  function changePage(buttonState, { page, numPages }) {
    console.log(numPages)
    if (buttonState === "forward" && page < numPages - 2) {
      setGalleryIndex(prevIndex => {
        return {
          ...prevIndex,
          index: prevIndex.index.map(index => index + 6),
          page: prevIndex.page + 1
        }
      })
    }
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
      <div id="gallery">
        {pokeCards}
        {/* Note: cannot use for loop inside here */}
      </div>

      <div id="bg_color">
        <div></div>
      </div>

      <button
        id="back_button"
        onClick={() => changePage("backward", galleryIndex)}
      ></button>
      <button
        id="forward_button"
        onClick={() => changePage("forward", galleryIndex)}
      ></button>

      <nav id="scroll">
        <article>Scroll bar</article>
      </nav>
    </div>
  );
}

export default BotScreen;
