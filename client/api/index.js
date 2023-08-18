const { response } = require('express')
const express = require('express')
const app = express()

//EJS
const ejs = require('ejs')
app.set('view engine', 'ejs')
const path = require('path')
app.set('views', path.join(__dirname, '/views'))

// const MongoClient = require('mongodb').MongoClient
const PORT = 8000

require('dotenv').config()
app.use(express.static('public'))                                   //auto import all files from public folder
app.use(express.json())

let api_url = 'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107'

// let db,
//     dbConnectionStr = process.env.DB_STRING                         //application interface to get user environment usng env


const getPokeAPI = async () => {
    try {
        const res = await fetch(api_url)
        const data = await res.json()

        //data.result gives array of name and url of each pokemon

        //create an array of promises using each pokemon's own api url
        const url_Promises = data.results.map(async (pokemon) => await fetch(pokemon.url))

        //call all of those promises at the same time
        const pokemon_Full_Data = await Promise.all(url_Promises).then(async values => {
            //this promise turns all of the array promises into readable json
            return await Promise.all(values.map(r => r.json()))
        })

        //Extract desired attributes of each pokemon into an array of objects
        //  Where each object is a pokemon and their attributes
        const extracted_poke_Data = pokemon_Full_Data.map(pokemon => ({
            name: pokemon.name,
            ability: pokemon.abilities,
            index: pokemon.game_indices[0].game_index,
            img_hd: pokemon.sprites.other.home.front_default,
            sprite: pokemon.sprites.front_default,
            types: pokemon.types,
            weight: pokemon.weight,
            height: pokemon.height
        }))

        return extracted_poke_Data

    } catch (err) {
        console.log(err)                                                           //throw error so that .then from getPokeAPI.then can handle error
    }
}



// MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true}, (err, client) => {
//     if (err) return console.error(err)
//     console.log('connected to database')
// })


app.get('/api', async function (req, res) {
    //Note, to run code AFTER async func call, use .then
    const Pokemon_data = await getPokeAPI()
    //.then(pokeData => console.log(pokeData))

    //-----------------------------------------------------
    //why doesnt this execute? Async has awaits but async |
    // console.log(Pokemon_data)                          |
    //-----------------------------------------------------
    // res.render('data.ejs', {Data: JSON.stringify(Pokemon_data)})
    res.json(Pokemon_data)

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})