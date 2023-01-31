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

const pokeAPI = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107')
        .then((res) => res.json())
        .then((data) {
            fet
        })
}

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