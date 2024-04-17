import React from 'react'
import Discover from '../discover/Discover'
import Header from '../header/Header'
import Recommended from '../recommended/Recommended'

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