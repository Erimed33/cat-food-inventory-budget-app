import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
    const [logs, setLogs] = useState([])
    useEffect(() => {
    
      fetch('http://localhost:3434/catfood')
          .then(res => res.json())
          .then(res => {
              console.log(res)
          })
          .catch(err => console.error(err))
  }, [])
    
  return (
    <div>
        Home Page
        </div>
  )
}

export default Home


