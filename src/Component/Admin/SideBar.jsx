import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='hidden md:flex flex-col items-center box-border bg-white-300  w-64  gap-3 h-screen'>
      <Link className=' w-52 m-2 mx-4' to={'/admin/productadmin'}>
        <div className='  rounded shadow-xl bg-lime-200 w-full p-2 flex justify-center font-semibold cursor-pointer'>
          Products</div>
      </Link>
      <div className='rounded shadow-xl bg-lime-200 w-52 p-2 flex justify-center font-semibold cursor-pointer'>Users</div>
    </div>
  )
}

export default SideBar
