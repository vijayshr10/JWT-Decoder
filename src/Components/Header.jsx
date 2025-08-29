import React from 'react'
import decoderLogo from "../Assets/decoderLogo.png"

const Header = () => {
  return (
    <div className='header'>
        <img src={decoderLogo} alt="decoder-logo" />

        <h1>JWT Decoder</h1>


    </div>
  )
}

export default Header