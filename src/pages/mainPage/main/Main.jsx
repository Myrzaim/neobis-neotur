import React from 'react'
import Discover from '../../../components/discover/Discover'
import Header from '../../../components/header/Header'
import Recommended from '../../../components/recommended/Recommended'

const Main = () => {
  return (
      <div className='main'>
          <Header />
          <Discover />
          <Recommended />
    </div>
  )
}

export default Main