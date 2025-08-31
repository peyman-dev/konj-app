import React from 'react'
import AddToCart from './add-to-cart'
import Description from './description'

const MainContent = () => {
  return (
    <main className='grow'>
        <AddToCart />
        <Description />
    </main>
  )
}

export default MainContent