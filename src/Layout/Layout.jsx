import React from 'react'
import TopNavBar from '../components/TopNavBar'
import BottomTabNav from '../components/BottomTabNav'
import '../styles/app.scss'

const Layout = (props) => {
  return (
    <div className="app">
      <div className='wallet'>
        <TopNavBar />
            <main className='main'>{props.children}</main>
        <BottomTabNav />
      </div>
    </div>
  )
}

export default Layout
