import { useState } from 'react'
import { Bloque } from './Bloque'
import { Lista } from './Lista'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Este es un componente</h1>
    <p>Este es un parrafo we</p>
    <Bloque></Bloque>
    <a href="https://www.google.com.bo">Enlace</a>
    <Bloque></Bloque>
    <Lista></Lista>
    </>
  )
}

export default App
