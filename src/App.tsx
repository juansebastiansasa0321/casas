import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuNavBar from "./menu"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <MenuNavBar/>
    </>
  )
}

export default App
