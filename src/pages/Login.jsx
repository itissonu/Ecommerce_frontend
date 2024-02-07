import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
//import { Toast } from 'react-toastify/dist/components';
import { ToastContainer, toast } from 'react-toastify';
import Toaster from '../Component/toast/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../redux_toolkit/userSlice';
import { Header } from '../Component/Ecommerce/Header'
import { Footer } from '../Component/Ecommerce/Footer'
import decoDeToken from '../utils/jsonwebtoken';



function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userPresent, setUser] = useState(false);

    const authstate = useSelector((state) => state.auth);

    useEffect(() => {
        const storedUserData = localStorage.getItem('user');

        if (!storedUserData) {
            setUser(false);
        } else {
            setUser(true)
        }
    }, [authstate.user]);

  const [userInfo, setUserInfo] = useState('');
  const handleChange = async (e) => {
    setUserInfo((prev) => ({
      ...prev, [e.target.name]: e.target.value

    }));

  }

  const hanleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(LoginUser(userInfo));
    
  }
  useEffect(() => {

    if (authstate?.user && authstate?.success) {  
      if (authstate.user.role === "admin") {
        navigate('/admin');
      } else {
        navigate('/login');
      }
    }
  }, [authstate]);


  return (
    <div className='  h-full w-full flex flex-col '>
      <Header />
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
      {/* <Toaster /> */}

      <div className='h-[80vh] w-full flex items-center justify-center'>
        <form className='h-1/2 w-1/3' onSubmit={hanleSubmit}>
          <input className=' w-full sm:w-80  p-2   border-2  border-slate-500' placeholder='email' type='email' name='email' onChange={handleChange} required />
          <input className=' w-full sm:w-80  p-2    border-2  border-slate-500' placeholder='password' type='password ' name='password' onChange={handleChange} required />
          <button className={` justify-center items-center flex hover:bg-cyan-400 w-28 font-bold h-12 p-1 rounded bg-orange-400 text-amber-50 ${userPresent===true ? 'hover:cursor-not-allowed hover:bg-slate-300 bg-slate-300 ' : 'hover:cursor-pointer'} shadow-xl ${authstate.loading ? 'animate-pulse' : ''}`}  disabled={userPresent}
            >{authstate.loading ? <div className='w-8 h-8 rounded-full border-b-4 border-dashed border-y-4 border-t-transparent animate-spin'></div> : 'Register'}   </button>
            <a onClick={()=>navigate('/register')}  className='hover:cursor-pointer'> Register Here</a>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login