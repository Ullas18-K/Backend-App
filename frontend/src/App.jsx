import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios, { Axios } from "axios"

function App() {
  const [jokelist, setjoke] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes').then((response) => { //http://localhost:3000/api/jokes -->we don't do this coz the host will keep changing like local host or any server also port numbers will be changing so the standard way --> /api/jokes(don't mention host or port)
      setjoke(response.data)
    }).catch((err) => {
      console.log(err);
    })
  })

  return (
    <>
      <h1>YO waddup twin!!</h1>
      <h3>jokes : {jokelist.length}</h3>
      {
        jokelist.map((joke, indx) => {
          return (
            <div key={joke.id}>
            <h3>Category:{joke.category}</h3>
            <h2>joke:{joke.setup}</h2>
            <p>{joke.punchline}</p>
          </div>
        )
        })
      }
    </>
  )
}

export default App
