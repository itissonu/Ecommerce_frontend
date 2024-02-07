import React from 'react'
import { Header } from './Header'
import Carousel from './Carousel'
import { Category } from './Category'

import { Footer } from './Footer'
import ProductContainer from './product/ProductContainer'
import { ToastContainer } from 'react-toastify'

function EcommerceHome() {
  return (


    <div className='  h-full w-full flex flex-col '>
   
      <Header />

      <Carousel className='mt-10'/>


      <Category />
      <Carousel />
      {/* <div className='w-[100%] flex justify-center items-center mt-5 flex-col'>
        <div className='mt-10 flex justify-center bg-red-700 text-white font-serif font-extrabold w-full'>
          <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'> FEATURED PRODUCTS</h2>
        </div>
        <div className='flex justify-center mt-4 w-[80%]'>
          <ProductContainer />
        </div>
      </div> */}

      <Category />
      <Footer />
      


    </div>



  )
}

export default EcommerceHome