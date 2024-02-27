import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { useNavigate } from 'react-router-dom';
import { ProductSidebar } from '../product/ProductSidebar';

export default function TemporaryDrawer({ toggleDrawer, openDrawer }) {
    const navigate = useNavigate()
   
    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation" >

            <div className='flex flex-col justify-between h-[100vh]  '>
                <div className='flex flex-col mx-2 '>
                    <span onClick={() => navigate('/')} className='text-2xl border-b-[1px] hover:cursor-pointer mt-4 shadow-md border-b-slate-300 font-bold p-2 '>Ecmmerce.</span>
                    <span onClick={() => navigate('/user/products')} className='text-base text-gray-500 font-bold m-2 '>Men</span>
                    <span  onClick={() => navigate('/user/products')} className='text-base text-gray-500 font-bold m-2'>Women</span>
                    <span onClick={() => navigate('/user/products')} className='text-base text-gray-500 font-bold m-2'>Kids</span>
                </div>
                <span className='mx-3'>Version 1.1</span>
            </div>
            {/* <ProductSidebar/> */}

        </Box>
    );

    return (
        <div>

            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}