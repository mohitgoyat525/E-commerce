"use client"
import Footer from '@/components/common/Footer'
import AllReviews from '@/components/review/AllReview'
import ReviewHero from '@/components/review/ReviewHero'
import YouMightLike from '@/components/review/YouMightLike'
import React from 'react'

const page = () => {
  return (
      <>
      <ReviewHero />
      <AllReviews />
      <YouMightLike />
      <Footer/>
      </>
  )
}

export default page