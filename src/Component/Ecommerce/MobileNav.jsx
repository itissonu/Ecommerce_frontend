import React from 'react'
import { useNavigate } from 'react-router-dom';
import cart from '../../photos/shopping-bag.png'
import wishlist from '../../photos/wishlist.png'
import search from '../../photos/magnifying-glass.png'
import { CgProfile } from "react-icons/cg";

const MobileNav = ({ handlesubmit, setSearch, userPresent, SetCartmodal, handleOpen,storedwishlist }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className=' sm:hidden flex justify-center items-center h-[100%]  '>
            
                <div className='flex relative'>
                
                <form onSubmit={handlesubmit}>
                    <input onChange={(e) => setSearch(e.target.value)} className=' p-2 outline-none  w-56  bg-[#eaeaea] border border-transparent ' type='text' placeholder='Search for products' /></form>
                    <img className='hidden md:flex h-6 w-6 absolute top-[12px] left-[-1.75rem] mr-2' src={search} />
                </div>
                <div onClick={() => {
                    if (userPresent) {
                        navigate('/user/wishlist');
                    } else {
                        handleOpen();
                        SetCartmodal(true)
                    }
                }} className='relative flex h-full mx-1 items-center hover:border-b-4 border-yellow-400'>
                    <span className='flex absolute top-[-0.50rem] rounded-[100%] z-10 bg-red-600 h-3 w-3 text-white font-extrabold  text-[9px] justify-center items-center right-2'>{storedwishlist.length || 0}</span>
                    <img className='h-6 w-6  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={wishlist} />
                </div>
                <div onClick={() => {
                    if (userPresent) {
                        navigate('/user/cart');
                    } else {
                        handleOpen();
                        SetCartmodal(true)
                    }
                }} className='relative flex mx-1 h-full items-center hover:border-b-4 border-yellow-400 '>
                    <span className='flex absolute top-[-0.50rem]  rounded-[100%] z-10 bg-red-600 h-3 w-3 text-white font-extrabold  text-[9px] justify-center items-center right-2'>{0}</span>
                    <img className='h-6 w-6  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={cart} />
                </div>
                {userPresent === true ? <div className='flex gap-1 '><CgProfile onClick={() => navigate('/user/myprofile')} className='w-7 h-7 hover:cursor-pointer' /></div> : <button className='h-max w-max rounded-lg font-semibold shadow-md text-yellow-50 bg-[#117a7a] p-2 ' onClick={() => navigate('/login')}>Login</button>}

            </div></div>
    )
}

export default MobileNav