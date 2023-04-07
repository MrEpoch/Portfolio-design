import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/introduction'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Introduction />
    </div>
  )
}

export default App
