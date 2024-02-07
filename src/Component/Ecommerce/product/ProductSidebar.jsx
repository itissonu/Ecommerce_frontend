import React, { useEffect, useState } from 'react'
/* checked={selectedCategories.includes(category)} 
          onChange={handleSelect}  */
          import Slider from 'rc-slider';
          import 'rc-slider/assets/index.css';
import { useDispatch } from 'react-redux';
import { updateParams } from '../../../redux_toolkit/paramSlice';


export const ProductSidebar = () => {


    const [clickmore, setMore] = useState(true)
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCategoriessecond, setSelectedCategoriessecond] = useState([]);
    const [color, setselectedcolor] = useState([]);
    const [More, setClickmore] = useState(true)

    const categories = clickmore
        ? [
            'TShirts', 'Shirts', 'Jeans', 'Dresses', 'Sweaters', 'Jackets', 'Shorts',]
        : ['TShirts', 'Shirts', 'Jeans', 'Dresses', 'Sweaters', 'Jackets', 'Shorts', 'Skirts', 'Activewear', 'Suits', 'Socks', 'Accessories', 'Shoes',];
    const brands = More ? ['Nike', 'Adidas', 'Puma', 'Levi\'s', 'Gap', 'H&M', 'Zara', 'Calvin Klein'] : ['Nike', 'Adidas', 'Puma', 'Levi\'s', 'Gap', 'H&M', 'Zara', 'Calvin Klein', 'Tommy Hilfiger', 'Under Armour', 'Fila', 'Converse', 'Vans', 'Reebok'];
    const colorOptions = ['pink', 'blue', 'green', 'yellow', 'purple', 'orange', 'brown', 'red', 'gray', 'black', 'white', 'cyan'];
    const dispatch = useDispatch();

    const handleSelect = async (event) => {
        const value = event.target.value;

        if (event.target.checked) {
            await setSelectedCategories((prevSelected) => [...prevSelected, value]);
        } else {
            await setSelectedCategories((prevSelected) => {
                const updatedCategories = prevSelected.filter((category) => category !== value);
                console.log(updatedCategories + "ip");
                console.log(selectedCategories + "non")
                return updatedCategories;
            });
        }
      
    };
  
    const handleSelectSecond = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedCategoriessecond((prevSelected) => [...prevSelected, value]);
        } else {
            setSelectedCategoriessecond((prevSelected) =>
                prevSelected.filter((category) => category !== value)
            );
        }

    };
    
    const handleSelectcolor = (event) => {
        const value = event.target.value;

        if (event.target.checked) {
            setselectedcolor((prevSelected) => [...prevSelected, value]);
        } else {
            setselectedcolor((prevSelected) =>
                prevSelected.filter((category) => category !== value)
            );
        }

    };
  
    const [range, setRange] = useState([100, 5000]);

    const handleRangeChange = (newRange) => {
      setRange(newRange);
    };
    const [minValue, maxValue] = range;
  
  
    useEffect(() => {
    const data = {
        minPrice: minValue,
        maxPrice: maxValue,
        // category: [...selectedCategories].join(','),
        colors: [...color].join(','),
        brand: [...selectedCategoriessecond].join(',')
    };
    const paramsData = JSON.parse(localStorage.getItem('params')) || {};
    const mergedData = { ...paramsData, ...data };
    localStorage.setItem('params', JSON.stringify(mergedData));

    dispatch(updateParams(mergedData));
}, [minValue, maxValue, selectedCategories, color, selectedCategoriessecond, dispatch]);

   

    return (
        <div className='bg-white h-full w-full'>
            <div>
                <div className=' p-2 flex justify-between'>
                    <h1 className='mx-4 m-4 font-bold'>Filter</h1>
                    <button> Clear all </button>
                </div>
                <div className='p-2 flex flex-col border-b-[1px] border-gray-200 shadow-sm border-r-[1px] '>
                    <label>
                        <input className='mx-4' type='radio' value='men' name='gender' />
                        Men
                    </label>

                    <label>
                        <input className='mx-4' type='radio' value='women' name='gender' />
                        Women
                    </label>

                    <label>
                        <input className='mx-4' type='radio' value='boy' name='gender' />
                        Boy
                    </label>

                    <label>
                        <input className='mx-4' type='radio' value='girl' name='gender' />
                        Girl
                    </label>
                </div>
                {/* <div className='border-b-[1px] flex flex-col border-gray-200 shadow-sm border-r-[1px] '>
                    <h1 className='mx-4 m-4 font-bold'>Category</h1>


                    <div>
                        {categories.map((category, i) => (
                            <div key={i} className='flex flex-col mx-5'>
                                <label key={category}>
                                    <input className='mx-2 h-4 w-4'
                                        type='checkbox'
                                        value={category}
                                        name='clothingCategory'
                                        checked={selectedCategories.includes(category)}
                                        onChange={handleSelect}

                                    />
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>
                    {clickmore ? <button className='text-red-400 p-2 font-semibold' onClick={() => setMore(false)}> +5 more</button> :
                        <button className='text-red-400 p-2 font-semibold' onClick={() => setMore(true)}>showless</button>
                    }

                </div> */}
                <div className='border-b-[1px] flex flex-col border-gray-200 shadow-sm border-r-[1px] '>
                    <h1 className='mx-4 m-4 font-bold'>Brand</h1>


                    <div>
                        {brands.map((category, i) => (
                            <div key={i} className='flex flex-col mx-5'>
                                <label key={category}>
                                    <input className='mx-3 h-4 w-4'
                                        type='checkbox'
                                        value={category}
                                        name='clothingCategory3'
                                        checked={selectedCategoriessecond.includes(category)}
                                        onChange={handleSelectSecond}

                                    />
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>
                    {More ? <button className='text-red-400 p-2 font-semibold' onClick={() => setClickmore(false)}> +5 more</button> :
                        <button className='text-red-400 p-2 font-semibold' onClick={() => setClickmore(true)}>showless</button>
                    }

                </div>
                <div className='p-2 flex flex-col border-b-[1px] border-gray-200 shadow-sm border-r-[1px] '>
                    <h1 className='mx-4 m-4 font-bold'>Price</h1>
                    <div>
                        <p>Selected Range: {range[0]} to {range[1]}</p>
                        <Slider
                            range
                            min={0}
                            max={10000}
                            step={10}
                            defaultValue={range}
                            onChange={handleRangeChange}
                        />
                    </div>
                </div>
                <div className='border-b-[1px] flex flex-col border-gray-200 shadow-sm border-r-[1px] '>
                    <h1 className='mx-4 m-4 font-bold'>Brand</h1>


                    <div>
                        {colorOptions.map((category, i) => (
                            <div key={i} className='flex  mx-5'>

                                <label className='flex justify-center items-center  capitalize text-base' key={category}>
                                    <input className='mx-1 h-4 w-4 '
                                        type='checkbox'
                                        value={category}
                                        name='clothingColor'
                                        checked={color.includes(category)}
                                        onChange={handleSelectcolor}

                                    /><div key={i} className={` h-4 w-4 mx-3 rounded-full z-1 bg-${category.toLowerCase()}-500`} style={{ backgroundColor: category }}></div>
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>
                    { /*  {More ? <button className='text-red-400 p-2 font-semibold' onClick={() => setClickmore(false)}> +5 more</button> :
                        <button className='text-red-400 p-2 font-semibold' onClick={() => setClickmore(true)}>showless</button>
                    }   */}

                </div>
                kkkkkk
            </div>
        </div>
    )
}
