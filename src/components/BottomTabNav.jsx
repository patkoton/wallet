import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faCompass, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import '../styles/bottomtabnav.scss'

const BottomTabNav = () => {

    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab, event) => {
      event.preventDefault();
      setActiveTab(tab);
    };

  return (
    <nav className="bottom-tab-nav">
      <ul className="tab-links">
        <li className={activeTab === 'home' ? 'active' : ''} onClick={(e) => handleTabClick('home', e)}>
          <Link href="/" className='link'><FontAwesomeIcon icon={faWallet} className='tab-icon' /></Link>
        </li>
        <li className={activeTab === 'share' ? 'active' : ''} onClick={(e) => handleTabClick('share', e)}>
          <Link href="/share" className='link'><FontAwesomeIcon icon={faCompass} className='tab-icon' /></Link>
        </li>
        <li className={activeTab === 'notifications' ? 'active' : ''} onClick={(e) => handleTabClick('notifications', e)}>
          <Link href="/notification" className='link'><FontAwesomeIcon icon={faBell} className='tab-icon' /></Link>
        </li>
        <li className={activeTab === 'settings' ? 'active' : ''} onClick={(e) => handleTabClick('settings', e)}>
          <Link href="/settings" className='link'><FontAwesomeIcon icon={faGear} className='tab-icon' /></Link>
        </li>
      </ul>
    </nav>
  )
}

export default BottomTabNav
