import React, { useEffect, useState } from 'react'
import tshirt from '../../photos/tshirt.png'
import Shirts from '../../photos/shirt.png'
import Jeans from '../../photos/jeans.png'
import Sweaters from '../../photos/ugly-sweater.png'
import Jackets from '../../photos/denim-jacket.png'
import Shorts from '../../photos/skirt.png'
import Shoes from '../../photos/shoes.png'
import Hoodie from '../../photos/winter-clothes.png'
import { useDispatch } from 'react-redux'
import { updateParams } from '../../redux_toolkit/paramSlice'
import { useNavigate } from 'react-router-dom'

export const Category = () => {
  const categories = [

    { id: 1, name: "TShirts", src: tshirt },
    { id: 2, name: "Shirts", src: Shirts },
    { id: 3, name: "Jeans", src: Jeans },
    { id: 4, name: "Sweaters", src: Sweaters },
    { id: 5, name: "Jackets", src: Jackets },
    { id: 6, name: "Shorts", src: Shorts },
    { id: 7, name: "Shoes", src: Shoes },
    { id: 8, name: "Hoodie", src: Hoodie },
    { id: 9, name: "Shoes", src: Shoes },
    { id: 10, name: "Hoodie", src: Hoodie }
  ];
  const navigate = useNavigate();
  // console.log(categories[0].src)
  const [category, setCategory] = useState('');

  const handleselectcategory = (name) => {
    setCategory(name);
};

const dispatch = useDispatch();

useEffect(() => {
    const paramsData = JSON.parse(localStorage.getItem('params')) || {};
    const mergedData = { ...paramsData, category: category };
    localStorage.setItem('params', JSON.stringify(mergedData));
    dispatch(updateParams(mergedData));

    if (category) {
        navigate('/user/products',{ state: { category } });
    }
}, [category, dispatch]);
  return (
    <div className=' mt-3 h-max w-full flex  flex-wrap justify-center flex-col '>
      <div className='mt-2 flex justify-center bg-red-700 text-white font-serif font-extrabold'>
        <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'>  SHOP BY CATEGORY</h2>
      </div>


      <div className=' mt-3 h-max w-full flex  flex-wrap justify-center  '>

        {categories.map((card, id) => (
          <div onClick={() => handleselectcategory(card.name)} key={id} className={`rounded-md border-[1px] hover:font-bold border-gray-500 w-[300px] h-[300px] flex flex-col m-2 shadow-xl justify-center items-center mx-5 p-3 hover:cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-gray-400`} >
            <img className=' w-40 h-40 hover:w-full hover:h-full object-cover transition-all duration-300  ease-in hover:z-10' src={card.src} />
            <span className='mt-4 text-[20px] font-mono text-gray-700 hover:font-bold hover:hidden '>{card.name}</span>
          </div>
        ))
        }

      </div>

    </div>
  )
}
