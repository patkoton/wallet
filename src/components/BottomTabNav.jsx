import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/bottomtabnav.scss'

const BottomTabNav = () => {

    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

  return (
    <nav className="bottom-tab-nav">
      <ul className="tab-links">
        <li className={activeTab === 'Home' ? 'active' : ''} onClick={() => handleTabClick('Home')}>
          <Link href="/"><i class="fas fa-wallet tab-icon"></i></Link>
        </li>
        <li className={activeTab === 'Share' ? 'active' : ''} onClick={() => handleTabClick('Share')}>
          <Link href="/share"><i class="fas fa-paper-plane tab-icon"></i></Link>
        </li>
        <li className={activeTab === 'Notifications' ? 'active' : ''} onClick={() => handleTabClick('Notifications')}>
          <Link href="/notification"><i class="fas fa-bell tab-icon"></i></Link>
        </li>
        <li className={activeTab === 'Settings' ? 'active' : ''} onClick={() => handleTabClick('Settings')}>
          <Link href="/settings"><i class="fas fa-cog tab-icon"></i></Link>
        </li>
      </ul>
    </nav>
  )
}

export default BottomTabNav
