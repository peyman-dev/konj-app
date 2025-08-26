"use client"
import Collection from '@/app/components/common/collection'
import HeroSection from '@/app/components/templates/home/hero-section'
import UnderHero from '@/app/components/templates/home/under-hero'
import React from 'react'

const page = () => {
  return (
    <main className='mb-20 relative'>
      <HeroSection />
      <UnderHero />
      <Collection 
        title='جدیدترین کتاب ها'
      />
    </main>
  )
}

export default page