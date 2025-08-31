import { bookImgConfiguration } from '@/app/core/lib/constants'
import Image from 'next/image'
import React from 'react'

const BookImage = () => {
  return (
    <div className='w-[274px] h-[415px]'>
        <Image 
            {
                ...bookImgConfiguration
            }
        />
    </div>
  )
}

export default BookImage