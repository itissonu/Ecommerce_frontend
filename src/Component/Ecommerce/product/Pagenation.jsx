import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateParams } from '../../../redux_toolkit/paramSlice';

const Pagenation = () => {

    const dispatch = useDispatch();
    const [pagevalue, setValueofPage] = useState(1);
    const params = useSelector((state) => state.params);
    console.log(pagevalue)
    const handleValueofPagePlus = () => {

        setValueofPage(pagevalue + 1)
        const data = {
            page: pagevalue
        }

        const mergedData = { ...params, ...data };


        dispatch(updateParams(mergedData));
    }
    const handleValueofPageMinus = () => {
        if (pagevalue > 1)
            setValueofPage(pagevalue - 1)
        const data = {
            page: pagevalue
        }

        const mergedData = { ...params, ...data };


        dispatch(updateParams(mergedData));
    }
    return (
        <div>
            <div className='w-full h-full p-6 flex item-center border-t-[1px] border-gray-300 mt-6'>
                <div className='flex w-[80%] h-max p-2 justify-center items-center gap-2'>
                    <div onClick={handleValueofPageMinus} className={`font-bold cursor-pointer text-base p-4 border-[1px] border-[#e93d67] text-[#e93d67] h-max ${pagevalue <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>Previous</div>
                    <button onClick={() => handleValueofPagePlus()} className='font-bold text-base p-4 border-[1px] border-[#e93d67] text-[#e93d67] h-max'>Next</button>

                </div>

            </div>
        </div>
    )
}

export default Pagenation