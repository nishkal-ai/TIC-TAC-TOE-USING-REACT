import { useState } from 'react'
import TicTacToe from './TicTacToe'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TicTacToe/>
    </>
  )
}

export default App
