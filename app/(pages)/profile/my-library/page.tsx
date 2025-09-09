import Filter from '@/app/components/templates/profile/pages/my-library/elements/filter'
import Table from '@/app/components/templates/profile/pages/my-library/elements/table'
import React from 'react'

const page = () => {
  return (
    <section className='p-6 bg-white grow rounded-[8px]'>
      <Filter />
      <Table />
    
    </section>
  )
}

export default page