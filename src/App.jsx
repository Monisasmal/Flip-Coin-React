import React, { useContext } from 'react'
import { CoinContext, CoinProvider } from './CoinContext'
import './App.css'
import FlipCoin from './FlipCoin'

const AppContent = () => {
  const {state, dispatch} = useContext(CoinContext)
  return (
    <div className={state.darkMode ? "App dark" : "App"}>
      <header>
        <h1>Coin Flipper</h1>
        <button onClick={() => dispatch({type:"TOGGLE_DARK"})}>
          {state.darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <FlipCoin/>
    </div>
  )
}

function App(){
  return(
    <CoinProvider>
      <AppContent/>
      </CoinProvider>
  )
}

export default App