import React from 'react'
import '../styles/topnavbar.scss'

const TopNavBar = () => {
  return (
    <nav className='top-navbar'>
        <button><i class="fas fa-chevron-left top-nav-icon"></i></button>
        <h2 className='wallet-title'>Bitcoin Wallet</h2>
        <button><i class="fas fa-ellipsis-v top-nav-icon"></i></button>
    </nav>
  )
}

export default TopNavBar
