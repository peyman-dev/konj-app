import Image from 'next/image'
import React from 'react'
import UserIcon from "@/svg/user.svg"

const UserName = () => {
  return (
    <div className='flex items-center gap-2'>
        <Image 
            src={UserIcon.src}
            width={16}
            height={16}
            alt='User Icon'
        />
        <p className='text-xs text-gray-300 font-Farhang-Regular'>
            پ ا
        </p>
    </div>
  )
}

export default UserName