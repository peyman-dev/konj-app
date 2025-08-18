import React, { ReactNode } from 'react'

const WithParentComponent = ({children}: {children: ReactNode}) => {
  return (
    <div className='relative'>
      {children}
    </div>
  )
}

export default WithParentComponent