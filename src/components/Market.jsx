import React from 'react'
import '../styles/app.scss'
import { BsCurrencyBitcoin } from "react-icons/bs";
import { TbChevronCompactDown } from "react-icons/tb";

const Market = () => {
  return (
    <div className='market'>
      <div className='mkt-row1'>
        <div className='mkt-row2'>
            <div className='btc'>
                <BsCurrencyBitcoin className='btc-icon' />
            </div>
            <p className='btc-text'>Bitcoin</p>
        </div>
        <p className='btc-abb'>BTC</p>
      </div>

      <div>
        <p className='bit'>
            3.529020 BTC
        </p>
      </div>

      <div className='mkt-row3'>
        <p className='btc-amt'>$19.153 USD</p>
        <div className='btc-pct'>
            <span className='pct'>-2.32%</span>
        </div>
      </div>

      <div className='mkt-row4'>
        <button><TbChevronCompactDown className='down-icon' /></button>
      </div>
    </div>
  )
}

export default Market
