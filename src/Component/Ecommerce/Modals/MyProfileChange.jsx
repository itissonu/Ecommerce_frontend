import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid gray',
    boxShadow: 24,
    p: 4,
};

export default function MyProfileChange({ handleClose, open,hanleSubmit,handleChange,setFile,user,userInfo }) {



    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='h-max'>
                <form  >
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-[10rem] h-[10rem] rounded-full m-2' src={user.profilePhoto} alt='img' />

                        <input type='file' className="cursor-pointer mx-3  ml-52 appearance-none bg-transparent border-none text-white p-2 rounded-md border-2 border-blue-500 hover:border-blue-700 focus:border-blue-700 focus:outline-none" accept="image/*"
                            onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className="relative">
                        <input
                            className={`w-full p-4 mt-4 border-[1px] border-slate-200 outline-none focus:border-blue-500`}
                            type="text"
                            name="name"
                            value={userInfo.name}
                            placeholder=" Enter your new Name "
                            onChange={handleChange}
                            required
                        />
                       
                    </div>
                    <div className="relative">
                        <input
                            className={`w-full p-4 mt-4 border-[1px] border-slate-200 outline-none focus:border-blue-500`}
                            type="email"
                            name="email"
                            value={userInfo.email}
                            placeholder="Enter the new email "
                            onChange={handleChange}
                            required
                        />
                        
                    </div>
                    <div className='flex gap-3 mt-2'>
                        <div className='flex justify-center w-full'>
                            <button className='w-full text-white font-bold h-max p-3  rounded-md  bg-[#117a7a]' type='submit' onClick={hanleSubmit}>SAVE</button>
                        </div>
                        <div className='flex justify-center w-full'>
                            <button className='w-full text-white font-bold h-max p-3  rounded-md  bg-[#117a7a]' onClick={handleClose}>CANCEL</button>
                        </div>
                        </div>
                        </form>
                </Box>
            </Modal>
        </div>
    );
}