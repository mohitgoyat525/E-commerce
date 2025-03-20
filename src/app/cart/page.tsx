import HeroCart from '@/components/cart/HeroCart'
import Footer from '@/components/common/Footer'
import React, { Suspense } from 'react'

const page = () => {
  return (
      <Suspense>
      <HeroCart />
      <Footer/>
      </Suspense>
  )
}

export default page