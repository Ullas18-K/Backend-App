import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokelist, setjoke] = useState([]);

  return (
    <>
      <h1>YO waddup twin!!</h1>
      <h3>jokes : {jokelist.length}</h3>

      {
        jokelist.map((joke, indx) => {
          <div key={joke.id}>
            <h3>Category:{joke.Category}</h3>
            <h2>joke:{joke.setup}</h2>
            <p>{joke.punchline}</p>
          </div>
        })
      }
    </>
  )
}

export default App
