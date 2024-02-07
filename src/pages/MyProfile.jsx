import React, { useEffect, useState } from 'react'
import { Header } from '../Component/Ecommerce/Header'
import cart from '../photos/shopping-cart.png'
import order from '../photos/collection.png'
import wishlist from '../photos/package.png'
import { Footer } from '../Component/Ecommerce/Footer'
import { useNavigate } from 'react-router-dom'
import MyProfileChange from '../Component/Ecommerce/Modals/MyProfileChange'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser } from '../redux_toolkit/userSlice'
import { toast } from 'react-toastify'
import { clearWishlistState } from '../redux_toolkit/wishlistSlice'
export const MyProfile = () => {
    const tostifyError = (msg) => {
        toast.error(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authstate = useSelector((state) => state.auth);
    const user = JSON.parse(localStorage.getItem('user')) || { name: '', email: '', profilePhoto: '' };
 
    const [open, setOpen] = React.useState(false);
    const [userInfo, setUserInfo] = useState({
        name: user.name,
        email: user.email
    });
    const handleClose = () => {
        console.log("closed")
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }

    const [file, setFile] = useState(null);
    const handleChange = async (e) => {
        setUserInfo((previous) => ({
            ...previous,
            [e.target.name]: e.target.value
        }
        ));
    };

    const hanleSubmit = async (event) => {
        event.preventDefault();

        let photo = file;
        const data = new FormData();
        if (file) {
            data.append('file', file);
            data.append('upload_preset', 'upload');
        }
        try {
            if (file) {
                const uploadRes = await axios.post(
                    'https://api.cloudinary.com/v1_1/dbsonu270/image/upload',
                    data
                );
                const { url } = uploadRes.data;
                photo = url;
                const userdetails = {
                    ...userInfo,
                    profilePhoto: photo || user.profilePhoto
                }
            }
            const userdetails = {
                ...userInfo,
                profilePhoto: photo || user.profilePhoto
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleLogout = async () => {
        try {
            await dispatch(LogoutUser());
            await dispatch(clearWishlistState())
                navigate('/');
       
        } catch (error) {
            console.log(error)
            tostifyError(authstate.error);
        }
    }
    return (
        <div className='w-full  flex flex-col'>
            <Header />
            {open && <MyProfileChange
                open={open}
                userInfo={userInfo}
                handleChange={handleChange}
                setFile={setFile}
                user={user}
                hanleSubmit={hanleSubmit}
                handleClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            />}
            <div className='mt-28 flex justify-center bg-red-700 text-white font-serif font-extrabold'>
                <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'> MY PROFILE</h2>
            </div>
            <div className='h-screen w-full  flex  justify-center items-center'>
                <div className='h-[60%] w-4/5 p-8 border-gray-300 border-[1px] flex-col flex shadow-lg'>
                    <div className='flex flex-[50%] bg-slate-100 p-3'>
                        <img className='w-40 h-40 rounded-sm mx-5 ' src={user.profilePhoto} alt='img' />
                        <div className='flex flex-col flex-[60%]  '>
                            <div className='flex justify-between'>
                                <span className='capitalize  font-bold text-lg'>  {user.name}   </span>
                                <button onClick={handleOpen} className='text-gray-700 shadow-lg h-10 w-max p-2 font-mono bg-white border-[1px] border-gray-400 ' >EDIT PROFILE</button>
                            </div>
                            <span className='text-gray-500' >{user.email}</span>
                            <label className='text-gray-600 hover:cursor-not-allowed flex w-max'>Password - <span className='border-[1px] border-gray-300 bg-gray-200 w-max'> **********</span></label>

                        </div>
                    </div>
                    <div className='w-full flex justify-between flex-[45%] p-3'>
                        <div onClick={() => (navigate('/user/myorders'))} className='border-[1px] border-gray-300 shadow-lg h-[70%] w-[20%] flex justify-center flex-col items-center hover:bg-gray-100 hover:cursor-pointer'>
                            <img className='w-14 h-14' src={wishlist} />
                            <span className='font-bold'>Orders</span>
                            <span className='text-thin text-gray-400 text-xs'>Check your order status</span>
                        </div>
                        <div onClick={() => (navigate('/user/myorders'))} className='border-[1px] border-gray-300 shadow-lg h-[70%] w-[20%] flex justify-center flex-col items-center hover:bg-gray-100 hover:cursor-pointer'>
                            <img className='w-14 h-14' src={order} />
                            <span className='font-bold'> Collection & Wishlist</span>
                            <span className='text-thin text-gray-400 text-xs'>All your curated product collection</span></div>
                        <div onClick={() => (navigate('/user/cart'))} className='border-[1px] border-gray-300 shadow-lg h-[70%] w-[20%] flex justify-center flex-col items-center hover:bg-gray-100 hover:cursor-pointer'>
                            <img className='w-14 h-14' src={cart} />
                            <span className='font-bold  '>My Cart</span>  <span className='text-thin text-gray-400 text-xs'>All you product in the cart</span></div>

                    </div>
                    <div className='w-full flex justify-center'>
                        <button onClick={handleLogout} className='text-white font-bold shadow-lg h-10 w-max p-2 font-mono bg-red-500 border-[1px] border-red-400 hover:bg-red-700' >LOGOUT</button>
                    </div>
                    <div>

                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}
