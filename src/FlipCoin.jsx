import React, { useContext } from 'react'
import { CoinContext } from './CoinContext';
import Coin from "./Coin";

const defaultCoin = [
  {side:"heads", imgSrc:"/Flip-head.png"},
  {side:"tails", imgSrc:"/Flip-tail.png"},
]

const FlipCoin = ({coin = defaultCoin}) => {
  const {state, dispatch} = useContext(CoinContext);

  const flipCoin = () =>{
    const newCoin = coin[Math.floor(Math.random() * coin.length)];
    dispatch({type:"FLIP", payload : newCoin})
  }

  const reset = () => dispatch({type: "RESET"});

  return (
    <div className='FlipCoin'>
      {state.currentCoin && <Coin side ={state.currentCoin.side} imgSrc={state.currentCoin.imgSrc}/>}
      <div className='button-group'>
        <button onClick={flipCoin}>Flip Coin</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>
        Out of {state.nFlips} flips, there have been {state.nHeads} heads and {state.nFlips - state.nHeads} tails.
      </p>
    </div>
  )
}

export default FlipCoin