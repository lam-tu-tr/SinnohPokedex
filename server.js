const { response } = require('express')
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000

require('dotenv').config()
app.set('view engine', 'ejs')                                       
app.use(express.static('public'))                                   //auto import all files from public folder
app.use(express.json())

let api_url = 'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107'

let db,
    dbConnectionStr = process.env.DB_STRING                         //application interface to get user environment

console.log(dbConnectionStr)

async function getPokeAPI() {
    try{
        const res = await fetch(api_url)
        const data = await res.json()
        //data.result gives array of name and url
        // const pokeList = Object.entries(data).map(([name, url]) => ({name, url}))        -> convert object to array
        console.log(data.results)

        // console.log(typeof(pokemonList))
        //now map this array and tag onto each object the full pokemon data by using another async function inside
        // let pokeData = pokemonList.map(pokemon => pokemon.url)
        // let pokemonData = await Promise.all(pokemonList.map(pokemon => pokemon.url))
        // const pokemon = pokemonList.map(async pokemon => {
        //     const 

        //     // {name: pokemon.name, url: pokemon.url}
        // })
        // return pokemon
    }catch(err) {
        console.log(err)
        //throw error so that .then from getPokeAPI.then can handle error
    }
}
getPokeAPI()
MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.error(err)
    console.log('connected to database')
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})