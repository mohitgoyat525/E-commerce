import React from 'react'
import CustomProduct from '../common/CustomProducts'
import { YOU_MIGHT_LIST } from '@/utils/Helper'

const YouMightLike = () => {
  return (
      <>
          <CustomProduct tittle='YOU MIGHT LIKE' productList={YOU_MIGHT_LIST} showDiscount={(i)=> i === 0 || i !==0}/>
      </>
  )
}

export default YouMightLike