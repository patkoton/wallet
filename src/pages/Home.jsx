import React from 'react'
import '../styles/app.scss'
import Layout from '../Layout/Layout'
import Market from '../components/Market'
import Transact from '../components/Transact'

const Home = () => {
  return (
    <Layout>
        <div>
            <Market />
            <Transact />
        </div>
    </Layout>
  )
}

export default Home
