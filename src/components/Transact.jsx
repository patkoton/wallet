import React from 'react'
import { LiaDollarSignSolid } from "react-icons/lia";
import '../styles/app.scss'
// import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

const Transact = () => {
  return (
    <div className='transact'>
      <div className='trct-col1'>
        <button className=''>
            <div className='bbtc-div'>
                <div className='bbtc'><LiaDollarSignSolid className='btc-icon' /></div>
            </div>
            <span className='bbtc-text'>Buy BTC</span>
        </button>
      </div>
      <div className='trct-col1'>
        <button className=''>
            <div className='bbtc-div'>
                <div className='sbtc'><LiaDollarSignSolid className='btc-icon' /></div>
            </div>
            <span className='bbtc-text'>Sell BTC</span>
        </button>
      </div>
    </div>
  )
}

export default Transact
