import React, { useState } from 'react'
import profile from '../photos/healthicons_ui-user-profile.svg'
import user from '../photos/user.png'
import lock from '../photos/lock.png'
import hide from '../photos/hide.png'
import eye from '../photos/eye.png'
import email from '../photos/email.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Header } from '../Component/Ecommerce/Header'
import { Footer } from '../Component/Ecommerce/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import {  RegisterUser } from '../redux_toolkit/userSlice'
function Register() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authstate = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState(true);
  const [file, setFile] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const handleChange = async (e) => {
    setUserInfo((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }
    ));
  };


  const hanleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
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
        setLoading(false);

        const userdetails = {
          ...userInfo,
          profilePhoto: photo
        }
       await  dispatch(RegisterUser(userdetails));
      }
    } catch (error) {
   
      console.log(error);
    }

  }


  return (
    <div className='h-min-[80vh] w-full flex flex-col ' >
     <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    <Header/>
    <div className='h-min-[80vh] h-[90vh] w-full flex items-center justify-center mt-[7rem]'>
     
      <div className=' h-[max]  p-5 bg-white  border-[1px] border-gray-300 shadow-lg '>
        <form className=' h-max w-full bg-white flex flex-col  rounded-sm items-center ' onSubmit={hanleSubmit}>
          <div className='flex flex-col justify-center items-center'>
            <img className=' m-2' src={  profile} alt='img' />
          
            <input type='file' className="cursor-pointer mx-3  ml-52 appearance-none bg-transparent border-none text-white p-2 rounded-md border-2 border-blue-500 hover:border-blue-700 focus:border-blue-700 focus:outline-none" accept="image/*"
              onChange={(e) => setFile(e.target.files[0])} required/>
          </div>
          <div className='flex m-3'>
            <img className=' w-11 h-11 mx-3' src={user} alt='img' />
            <input className=' w-full sm:w-80 p-2 outline-none   border-b-2  border-slate-500' type='text' name='name' placeholder='Enter Your Name' onChange={handleChange} required />
          </div>
          <div className='flex m-3'>
            <img className=' w-11 h-11 mx-3' src={email} alt='img' />
            <input className=' w-full sm:w-80 p-2 outline-none   border-b-2  border-slate-500' type='email' name='email' placeholder='Enter Your Password' onChange={handleChange} required />
          </div>
          <div className='flex  m-3 relative'>
            <img className=' w-11 h-11 mx-3' src={lock} alt='img' />
            <input className='w-full sm:w-80  p-2 outline-none   border-b-2  border-slate-500' type={pass ? 'password' : 'text'} name='password' placeholder='Enter Your Password' onChange={handleChange} required />
            {pass ? <img className='absolute  top-1 right-0 w-8 h-8 mx-2' onClick={() => setPass(false)} src={eye} alt='img' /> :
              <img className='absolute  top-1 right-0 w-8 h-8 mx-2' onClick={() => setPass(true)} src={hide} alt='img' />}
          </div>
          <div className=' mt-4 flex justify-between items-center '>
            <button className={`hover:cursor-pointer justify-center items-center flex hover:bg-cyan-400 w-28 font-bold h-12 p-1 rounded bg-green-400 text-amber-50 shadow-xl ${authstate.success ? 'hover:cursor-not-allowed' : ''}  ${loading ? 'animate-pulse' : ''}`} type='submit' >{loading ? <div className='w-7 h-7 rounded-full border-b-4 border-dashed border-white animate-spin'></div> : 'Register'}</button>
            {
            authstate.success && <span className='text-base font-bold hover:cursor-pointer text-slate-700 mx-5 ' onClick={()=>navigate('/login')}> Login {'>>'}</span>
          }

          </div>
         


        </form>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register