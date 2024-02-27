import React from 'react'
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
const UsernotPresent = ({open,handleClose}) => {
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
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='h-max'>
                <span className='text-base font-semi-bold mx-3 p-4'>You Are not  logged in please.......    </span>
                    <button onClick={() => {
                        handleClose();
                        navigate('/login')
                    }} className='w-full text-white font-bold h-max p-3  rounded-md  bg-[#117a7a] '>Register or Login</button>
                </Box>
            </Modal>
        </div>
    )
}

export default UsernotPresent