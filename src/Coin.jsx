import React from 'react'

const Coin = ({imgSrc, side}) => {
  return (
  <div className='Coin'>
    <img src={imgSrc} alt={side} width="150"/>
  </div>
  )
}

export default Coin