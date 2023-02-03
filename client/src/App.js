import React, {useEffect, useState} from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])        //empty array of objects to store from api

  useEffect(() => {
    fetch("/api").then(
      res => res.json())
    .then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (

    <div>App</div>
  )
}

export default App