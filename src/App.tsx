import React from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './pages/HomePage'
import { thisExpression } from '@babel/types'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to the Rocket Launcher App</h1>
      </header>
      <HomePage />
    </div>
  )
}

export default App
