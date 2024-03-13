import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { GrStatusInfo } from "react-icons/gr";
import { CgEditFlipH } from "react-icons/cg";
import { Link } from 'react-router-dom';
import '../styles/topnavbar.scss'

const TopNavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='top-navbar'>
        <button><FontAwesomeIcon icon={faChevronLeft} className='top-nav-icon' /></button>
        <h2 className='wallet-title'>Bitcoin Wallet</h2>
        <button className='menu-button' onClick={toggleMenu}><FontAwesomeIcon icon={faEllipsisVertical} className='top-nav-icon' /></button>
        {isMenuOpen && (
        <>
          <div className="overlay" onClick={toggleMenu} />
          <div className="menu-content">
            <ul>
              <li>
                <Link className='link'>
                  <div className='menu-div'>
                    <span className='menu-text'>Edit</span>
                    <CgEditFlipH />
                  </div>
                </Link>
              </li>
              <li>
                <Link className='link'>
                  <div className='menu-div'>
                    <span className='menu-text'>Courier info</span>
                    <GrStatusInfo />
                  </div>
                </Link>
              </li>
              <li>
                <Link className='link'>
                  <div className='menu-div'>
                    <span className='menu-text'>Share</span>
                    <FiShare />
                  </div>
                </Link>
              </li>
              <li>
                <Link className='link'>
                  <div className='menu-div'>
                    <span className='menu-text remove'>Remove</span>
                    <IoIosRemoveCircleOutline className='remove' />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

export default TopNavBar
