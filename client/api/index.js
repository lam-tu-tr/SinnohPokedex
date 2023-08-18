const express = require("express");
const app = express();

app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "/views"));

const PORT = 8000;

require("dotenv").config();
app.use(express.static("public")); //auto import all files from public folder
app.use(express.json());

let api_url = "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107";
let species_url = `https://pokeapi.co/api/v2/pokemon-species/?offset=386&limit=107`;

const getPokeAPI = async () => {
  try {
    console.log("getting api");
    const res = await fetch(api_url);
    const data = await res.json();

    //data.result gives array of name and url of each pokemon

    //create an array of promises using each pokemon's own api url
    const url_Promises = data.results.map(
      async (pokemon) => await fetch(pokemon.url)
    );

    //call all of those promises at the same time
    const pokemon_Full_Data = await Promise.all(url_Promises).then(
      async (values) => {
        //this promise turns all of the array promises into readable json
        return await Promise.all(values.map((r) => r.json()));
      }
    );
    const res2 = await fetch(species_url);
    const data2 = await res2.json();

    //create an array of promises using each pokemon's own api url
    const url_Promises2 = data2.results.map(
      async (pokemon) => await fetch(pokemon.url)
    );

    //call all of those promises at the same time
    const pokemon_Full_Data2 = await Promise.all(url_Promises2).then(
      async (values) => {
        //this promise turns all of the array promises into readable json
        return await Promise.all(values.map((r) => r.json()));
      }
    );

    const extracted_flavor_text = pokemon_Full_Data2.map(
      (pokemon) => pokemon.flavor_text_entries[0].flavor_text
    );

    //Extract desired attributes of each pokemon into an array of objects
    //  Where each object is a pokemon and their attributes
    const extracted_poke_Data = pokemon_Full_Data.map((pokemon) => ({
      name: pokemon.name,
      ability: pokemon.abilities,
      index: pokemon.game_indices[0].game_index,
      img_hd: pokemon.sprites.other.home.front_default,
      sprite: pokemon.sprites.front_default,
      types: pokemon.types,
      weight: pokemon.weight,
      height: pokemon.height,
    }));

    for (let i = 0; i < extracted_poke_Data.length; i++) {
      extracted_poke_Data[i] = {
        ...extracted_poke_Data[i],
        flavor_text: extracted_flavor_text[i],
      };
    }

    return extracted_poke_Data;
  } catch (err) {
    console.log(err); //throw error so that .then from getPokeAPI.then can handle error
  }
};

app.get("/api", async function (req, res) {
  const Pokemon_data = await getPokeAPI();

  res.json(Pokemon_data);
});

//* process.env.PORT is a automatic PORT checker convention that deployment websites use
//* so that the app can accept.
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
