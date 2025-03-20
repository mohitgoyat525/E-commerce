"use client"
import Footer from '@/components/common/Footer'
import AllReviews from '@/components/review/AllReview'
import ReviewHero from '@/components/review/ReviewHero'
import YouMightLike from '@/components/review/YouMightLike'
import React, { Suspense } from 'react'

const page = () => {
  return (
      <Suspense>
      <ReviewHero />
      <AllReviews />
      <YouMightLike />
      <Footer/>
      </Suspense>
  )
}

export default page