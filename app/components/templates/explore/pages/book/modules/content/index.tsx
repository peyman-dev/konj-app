import React from 'react'
import AddToCart from './add-to-cart'
import Description from './description'

const MainContent = () => {
  return (
    <main className='grow space-y-5'>
        <AddToCart />
        <Description />
    </main>
  )
}

export default MainContent