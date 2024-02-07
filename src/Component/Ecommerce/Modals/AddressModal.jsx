import React, { useState } from 'react'

import delImage from '../../../photos/close.png'
export const AddressModal = ({ isOpen, setOpen,setAddres ,addres}) => {

   


    const handleChange = (e) => {
        setAddres((prev) => (
            {
                ...prev, [e.target.name]: e.target.value
            }
        ));
    }
    
    console.log(addres);

    const handleSubmit = (event) => {
        event.preventDefault();
        const ExistingAddress = JSON.parse(localStorage.getItem('addresses')) || [];
        const newaddress = [...ExistingAddress, addres];
        setAddres(newaddress)
        localStorage.setItem('addresses', JSON.stringify(newaddress));
        setOpen(false)

    }

    return (
        <div>
            <div  className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-1000 z-[51] ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>

                <div className='bg-white p-8 rounded shadow-xl  w-1/3'>
                    <h2 className=' text-2xl font-mono font-bold text-gray-700 text-center m-2'>Add A Address</h2>
                    <img className='  w-5 h-5 relative top-[-67px] right-[-12px] float-right hover:cursor-pointer' src={delImage} onClick={() => setOpen(false)} alt='deletebutton' />
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center '>
                        <span className='block text-gray-500'>City</span>
                        <input className=' outline-none border-2 border-slate-500 m-2 p-2 w-full' type='text' name='city' required onChange={handleChange} />
                        <span className='block text-gray-500'>State</span>
                        <input className='outline-none  border-2 border-slate-500 m-2 p-2 w-full' type='text' name='state' required onChange={handleChange} />

                        <span className='block  text-gray-500'>Country</span>
                        <input className='outline-none  border-2 border-slate-500 m-2 p-2 w-full' type='text' name='country' required onChange={handleChange} />
                        <span className='block  text-gray-500'>Address</span>
                        <textarea
                            className='outline-none p-1 h-24 w-full border-2 border-slate-500 resize-none m-2'
                            type='text'
                            name='address' required onChange={handleChange}
                        />
                        <span className='block  text-gray-500'>Phone</span>
                        <input className=' outline-none border-2 border-slate-500 m-2 p-2 w-full' type='number' name='phoneNo' required onChange={handleChange} />
                        <span className='block  text-gray-500'>Pincode</span>
                        <input className='outline-none  border-2 border-slate-500 m-2 p-2 w-full' maxLength={6} type='number' name='pinCode' required onChange={handleChange} value={addres.pinCode} />
                        <div className=' items-center justify-center flex mt-3'>
                            <button type='submit' className=' align-middle w-20 hover:cursor-pointer  hover:bg-cyan-400  font-bold h-12 p-1  rounded-md bg-[#117a7a] text-amber-50 shadow-2xl' > Add</button>
                        </div>


                    </form>
                </div>

            </div>
        </div>
    )
}
