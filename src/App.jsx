import { useState } from 'react'
import './App.css'

import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Header />
    </div>
  )
}

export default App
