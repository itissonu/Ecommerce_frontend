import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

export default function SizeModal({ handleClose, open, selectedProduct, handleSetSize, border }) {

    const stocksize = selectedProduct.stock >= 10 ? 10 : selectedProduct?.ProductId?.Stock;
  
    const startValue = 1;
    const endValue = stocksize;
    const newArray = [];

    for (let i = startValue; i <= endValue; i++) {
        newArray.push(i);
    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='h-max'>
                    <div className='flex gap-3 m-2'>
                        <img className='w-20 h-20' src={selectedProduct?.ProductId?.images[0].url} />
                        <div className='flex flex-col'>
                            <span className=' font-bold text-base capitalize'> {selectedProduct?.ProductId?.brand}</span>
                            <span className='text-gray-500 text-base'>{selectedProduct?.ProductId?.category}</span>
                            <span className='text-gray-500 text-base'>Rs.{selectedProduct?.ProductId?.price}</span>
                        </div>
                    </div>
                    <span className='p-2 m-2 font-bold'> Select A  Size</span>
                    <div className='flex gap-2 m-4 flex-wrap'>                    
                        {newArray.map((b,index) => (
                            <div key={index} className='flex  '>
                                <button onClick={()=>handleSetSize(selectedProduct?._id, b,index)} className={`${border === index ? 'border-red-400 shadow-red-300' : 'border-slate-600'}   hover:bg-slate-100  p-5 border-[1px] `}>{b}</button>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='w-full text-white font-bold h-max p-3  rounded-md  bg-[#117a7a]' onClick={()=>handleClose(selectedProduct?._id,selectedProduct)}>DONE</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}