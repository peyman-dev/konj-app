import React from 'react'

const CallToActionButton = ({onSubmit}: {onSubmit?: () => {}}) => {
  return (
    <button className='h-[65px] font-YekanBakh-Bold! duration-150 hover:bg-zinc-950! cursor-pointer! bg-black! rounded-lg! !max-w-max text-white! flex-center px-[34.5px]!'>
        همین حالا بشنوید
    </button>
  )
}

export default CallToActionButton