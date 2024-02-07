import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
    const [psw, setpsw] = useState('');
    const [loading, setLoading] = useState(false);
    const usenavigate = useNavigate();
    const handlechange = (e) => {
        setpsw((prev) => (
            {
                ...prev, [e.target.name]: e.target.value
            }
        ))
    }
    const hanleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const id = url.pathname.split('/').pop();

        console.log(id);
        try {
            await axios.put(`http://localhost:8001/app/auth/password/reset/${id}`, psw, {
                withCredentials: true,
            });
            usenavigate('/login');
            setLoading(false);
        } catch (error) {
            console.log(error);
        }


    }
    console.log(psw);
    return (
        <div className='flex justify-center items-center  h-screen w-full  bg-slate-100 border-t-4 border-yellow-500' >

            <div className=' h-[40] w-1/3 max-w-md  bg-white shadow-lg '>
                <form className=' h-full w-full bg-white flex flex-col shadow-lg rounded-sm items-center  p-4' onSubmit={hanleSubmit}>


                    <div className='flex m-3 flex-col w-full' >
                        <h1 className=' font-bold text-base mb-3  text-center'>Reset Password</h1>

                        <div className="relative">
                            <input
                                className={`w-full p-4 mt-4 border-[1px] border-slate-200 outline-none focus:border-blue-500`}
                                type="password"
                                name="password"
                                placeholder="  Create A New Password "
                                onChange={handlechange}
                                required
                            />
                            <label
                                className={`absolute  bg-white  transition-transform transform ${psw.password ? '-translate-y-4 text-sm text-gray-500 top-[1.5rem] left-[1.5rem]' : 'hidden first-letter:translate-y-0 text-gray-400 top-5 left-5 '
                                    }`}
                            >
                                Create A New Password
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                className={`w-full p-4 mt-4 border-[1px] border-slate-200 outline-none focus:border-blue-500`}
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm The New Password "
                                onChange={handlechange}
                                required
                            />
                            <label
                                className={`absolute  bg-white  transition-transform transform ${psw.confirmPassword ? '-translate-y-4 text-sm text-gray-500 top-[1.5rem] left-[1.5rem]' : 'hidden text-gray-400 top-5 left-5 '
                                    }`}
                            >
                                Confirm The New Password
                            </label>
                        </div>
                    </div>
                    <div className=' mt-4 w-full'>
                        <button className={`hover:cursor-pointer justify-center items-center flex hover:bg-cyan-400 w-full font-bold h-12 p-1 rounded bg-[#e93d67] text-amber-50 shadow-xl ${loading ? 'animate-pulse' : ''}`} type='submit' >{loading ? <div className='w-7 h-7 rounded-full border-b-4 border-dashed border-white animate-spin'></div> : 'RESET PASSWORD'}</button>
                    </div>
                    <span className='m-3'><a href='/forgot' className='text-[#e93d67]'>Back</a></span>

                </form>
            </div>
        </div>
    )
}
