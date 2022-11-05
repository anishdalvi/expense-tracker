import { useState } from 'react'
import './App.css'

import Dashboard from './components/dashboard/Dashboard'
import Tp from './components/Tp'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
    <Tp />
    <Dashboard />
    
    </>
  )
}

export default App
