import axios from 'axios';
import React, { useState } from 'react'
import MailIcon from '../photos/gmail.png'

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [email, setEmail] = useState('');
  const hanleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(email)
    try {
      await axios.post(`http://localhost:8001/app/auth/password/forgot`, {email}, {
        withCredentials: true,
      });

      setLoading(false);
      setConfirm(true);
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className='flex justify-center items-center  h-screen w-full  bg-slate-100 border-t-4 border-yellow-500' >
      {confirm && <div className=' h-[40%] w-1/3 max-w-md  bg-white shadow-lg p-4 flex flex-col justify-center '>
      <div className='flex flex-col justify-center items-center w-full'> <img src={MailIcon} alt='gmail' className='h-20 w-20'
        />
        <span className='font-bold text-lg block m-5'>We have sent a password reset link to {email} </span>
        <span className='block text-xs text-gray-600 m-3'>click on 'Reset Password Link' sent to your email id and create a new password</span></div>
       
      </div>}

      <div className={` h-[40] w-1/3 max-w-md  bg-white shadow-lg ${confirm===true?'hidden':'flex'} `}>
        <form className=' h-full w-full bg-white flex flex-col shadow-lg rounded-sm items-center  p-4' onSubmit={hanleSubmit}>


          <div className='flex m-3 flex-col ' >
            <h1 className=' font-bold text-base mb-3'>Reset Password</h1>
            <span className='block font-thin text-[12px] font-serif text-gray-600'>Enter Your Email so that we can send you an Link to reset your Password</span>
            <input className=' w-full  sm:w-80 p-2 outline-none mt-4  border-[1px]  border-slate-200' type='email' name='email' placeholder='Enter Your Email' onChange={(e) => (setEmail(e.target.value))} required />
          </div>
          <div className=' mt-4 w-full'>
            <button className={`hover:cursor-pointer justify-center items-center flex hover:bg-cyan-400 w-full font-bold h-12 p-1 rounded bg-[#e93d67] text-amber-50 shadow-xl ${loading ? 'animate-pulse' : ''}`} type='submit' >{loading ? <div className='w-7 h-7 rounded-full border-b-4 border-dashed border-white animate-spin'></div> : 'SEND LINK'}</button>
          </div>
          <span className='m-3'><a href='/login' className='text-[#e93d67]'>Back</a></span>

        </form>
      </div>
    </div>
  )
}
