import React, { useEffect, useState, createContext } from 'react'

export const AppContext = createContext({})

export default function AppContextWrapper({ children }) {

    const typeColorObj = {
        rock: [182, 158, 49],
        ghost: [112, 85, 155],
        steel: [183, 185, 208],
        water: [100, 147, 235],
        grass: [116, 203, 72],
        psychic: [251, 85, 132],
        ice: [154, 214, 223],
        dark: [117, 87, 76],
        fairy: [230, 158, 172],
        normal: [170, 166, 127],
        fighting: [193, 34, 57],
        flying: [168, 145, 236],
        poison: [164, 62, 158],
        ground: [222, 193, 107],
        bug: [167, 183, 35],
        fire: [245, 125, 49],
        electric: [249, 207, 48],
        dragon: [112, 55, 255],
    };

    //array of objects to store data from api
    const [pokeData, setPokeData] = useState(null);
    //topscreen poke index
    const [selectedIndex, setSelectedIndex] = useState(2);
    //bot screen pokecard indexes
    // const [galleryIndex, setGalleryIndex] = useState([0,1,2,3,4,5],[0])

    const [obtainedStatus, setObtainedStatus] = useState(true)

    useEffect(() => {
        //"API" call from file WITHOUT backend
        // console.log("fetching data api from json file");
        // async function fetchData() {
        //     const res = await fetch("./api.json"); //from public????
        //     const data = await res.json();
        //     setPokeData(data);
        // }
        // fetchData();

        //API call from BACKEND

        try {
            async function fetchData() {
                console.log("fetching data backend api")
                const res = await fetch("/api")
                const data = await res.json()
                // return data
                // .then(res => res.json())
                // .then(
                //   data => {
                //     console.log('data received from backend')
                //     console.log(data)
                //     setPokeData(data)
                // })

                setPokeData(data)
            }
            fetchData()

        } catch (err) {
            console.log(err)
        }
    }, []);

    return (
        <AppContext.Provider value={{
            pokeData,
            selectedIndex,
            setSelectedIndex,
            obtainedStatus,
            setObtainedStatus,
            typeColorObj
        }}>
            {children}
        </AppContext.Provider>
    )
}
