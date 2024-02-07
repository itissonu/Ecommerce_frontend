import React, { useEffect, useState } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { WishlistGetAllProducts, deleteWishlistProduct } from '../../../redux_toolkit/wishlistSlice'
import { Loaderproduct } from '../Loaderproduct'
import { AddcartsProduct, cartsGetAllProducts } from '../../../redux_toolkit/cartSlice'
import { useNavigate } from 'react-router-dom'
import Wishlistnotif from '../Modals/Wishlistnotif'
import Productloader from '../../../utils/Productloader'

export const Wishlist = () => {
  const wishliststate = useSelector((state) => state.wishlistproducts) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = async (id, FinalPrice, size) => {
    await dispatch(deleteWishlistProduct(id));
    const data = { ProductId: id, quantity: 1, FinalPrice, size }
    await dispatch(AddcartsProduct(data));
  }

  const storedUserData = localStorage.getItem('user');

  const handleReove = async (id) => {
    await dispatch(deleteWishlistProduct(id));

  }
  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(cartsGetAllProducts());
    };

    fetchProducts()
  }, []);

  useEffect(() => {
    const calldispatch = async () => {
      await dispatch(WishlistGetAllProducts())
    }
    calldispatch()
  }, []);
  const products = wishliststate.wishproducts;
  /////////////////////////////////////
////////////////////////////////////////
  if (!storedUserData) {
    // 
    navigate('/login')
  }
  if (wishliststate.loading) {

    return (
      <div>
        <Header />
        <div className='flex justify-center items-center h-screen'>
          <Loaderproduct />
        </div>
        <Footer />
      </div>
    );
  }

  if (wishliststate.wishproducts.length === 0) {

    return (
      <div>
        <Header />
        <div className='mt-[7.5rem] flex justify-center bg-red-700 text-white font-serif font-extrabold'>
          <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'>
            WISHLIST PRODUCTS
          </h2>
        </div>
        <div className='flex justify-center items-center h-screen'>
          <p>No products in the wishlist.</p>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className='relative'>
      <Header />
      
      <div className='mt-[7.5rem] flex justify-center bg-red-700 text-white font-serif font-extrabold'>
        <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'> WISHLIST PRODUCTS</h2>
      </div>
      <div className='w-full h-full flex flex-wrap mt-6'>
        {products.map((product, id) => (
          <div onClick={() => navigate(`/user/singleProduct/${product?.ProductId?._id}`)} className='w-[19rem] h-[505px]  justify-center m-2 shadow-xl items-center flex flex-col rounded-[10px]' key={id} >
            <div className=' relative h-64 '>
              <span className='text-xs border-1 border-gray-400 bg-[darkseagreen]
               
                 text-[darkslategray] p-1 absolute top-2 left-2 rounded-md shadow-md '>{product?.ProductId?.brand}</span>
              <img className='h-64 w-64 ' src={product?.ProductId?.images[0].url} />
            </div>
            <div className='flex flex-col h-[136px]  w-full p-3'>
              <span className='font-[700] mx-2'>{product.ProductId?.category}</span>
              <h1 className='font-normal text-base mx-2'>{product.ProductId?.name}</h1>

              <div className='flex  p-2 items-center'>
                <span className='font-[700] text-sm '>Rs.{product.ProductId?.price}</span>
                <span className='text-red-600  mx-2'>{product.ProductId?.discount}% OFF</span>
              </div>
            </div>
            <div className='w-full gap-7 m-5 flex justify-center'>
              <button onClick={(e) => {
                e.stopPropagation();
                handleAdd(product.ProductId._id, ((product.ProductId?.price) - (product?.ProductId?.price) * (product?.ProductId?.discount / 100)).toFixed(0), product.ProductId?.size[0])
              }} className='font-bold text-base p-2 border-[1px] border-[#e93d67] text-[#e93d67]'>MOVE TO BAG</button>
              <button onClick={(e) => {
                e.stopPropagation();
                handleReove(product.ProductId._id)
              }} className='font-bold text-base p-2 border-[1px] border-[gray] text-[gray]'>REMOVE</button>
            </div>{console.log()}
          </div>
        ))

        }


      </div> <div className="glow-element h-5 w-5 bg-green-500 rounded-full animate-pulse"></div>
     
      <Footer />
    </div>
  )
}
