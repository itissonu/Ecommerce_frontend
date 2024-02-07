import React from 'react'

const ProductBagged = () => {
  return (
    <div className='p-3 h-max w-max flex items-center bg-black gap-1 rounded-sm shadow-md fixed top-[7rem] right-7 z-50  transition-transform transform  -translate-x-full'>
        {/* <img className='h-10 w-10' src='http://res.cloudinary.com/dbsonu270/image/upload/v1703242132/upload/i0ovi75v0ubzk7vf0she.png'/> */}
        <span className='text-lg font-mono font-semibold text-white'>Product added to cart</span>
    </div>
  )
}

export default ProductBagged