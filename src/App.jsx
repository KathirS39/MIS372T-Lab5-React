import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Foot from './components/Foot'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header name={"Kathir"}/>
      <Section1 />
      <Section2 />
      <Foot currentYear={new Date().getFullYear()}/>
    </>
  )
}

export default App
