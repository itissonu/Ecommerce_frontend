import React, { useState } from 'react'
import img from '../../photos/addAvatar.png'
import delImage from '../../photos/delete.png'
import axios from 'axios'
import { toast } from 'react-toastify';
import Toaster from '../toast/Toast';

export const Model = ({ isOpen, setOpen, tostifySuccess }) => {
  const ageCategories = ["select", "Men", "Women", "Boys", "Girls", "Infants", "Toddlers"];
  const clothingCategories = ["select", "TShirts", "Shirts", "Jeans", "Dresses", "Sweaters", "Jackets", "Shorts", "Skirts", "Activewear", "Suits", "Socks", "Accessories", "Shoes"];
  const sizeOptions = ["select", 'S', 'M', 'L', 'XS', 'XL'];
  const colorOptions = ["select", 'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black', 'white', 'cyan'];
  const brandOptions = ["select", 'Nike', 'Adidas', 'Puma', 'Levi\'s', 'Gap', 'H&M', 'Zara', 'Calvin Klein', 'Tommy Hilfiger', 'Under Armour', 'Fila', 'Converse', 'Vans', 'Reebok'];


  const [files, setFiles] = useState();
  const [ProductInfo, setInfo] = useState({})
  const [load, setLoad] = useState(false);

  const handleChange = async (e) => {
    setInfo((prev) => (
      { ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(ProductInfo);

  // const tostifySuccess = (msg) => {
  //   toast.success(msg, {
  //     position: "top-left",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // }
  // const tostifyerror = (msg) => {
  //   toast.error(msg, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // }
  const [ProductInfotag, setInfotag] = useState({
    tags: [],
    newTag: '', // new state to hold the input for adding new tags
  });




  const handleTagsChange = (e) => {
    setInfotag((prev) => ({ ...prev, newTag: e.target.value }));
  };

  const addTag = () => {
    setInfotag((prev) => ({
      ...prev,
      tags: [...prev.tags, prev.newTag],
      newTag: '', // clear the input after adding the tag
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoad(true);

      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dbsonu270/image/upload",
            data
          );
          const { url } = uploadRes.data;
          return { url };
        })
      );
      console.log(list)

      const newProduct = {
        ...ProductInfo,
        images: list,
        colors: [ProductInfo.colors],
        size: [ProductInfo.size],
        price: parseFloat(ProductInfo.price),
        Stock: parseInt(ProductInfo.stock),
        tags: ProductInfotag.tags
      };

      const resdata = await axios.post("http://localhost:8001/app/product/admin/newProduct", newProduct, {
        withCredentials: true,
      });

      const message = resdata.data.message;
      setLoad(false);
      setOpen(false)
      tostifySuccess(message);
      // setOpen(false)
    }
    catch (err) {
      // tostifyerror(err.response.data.message);
      console.log(err)
    }

  }


  //console.log({...ProductInfo,tags:ProductInfotag.tags})
  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 z-50'>
      {/* <Toaster /> */}
      <div className='bg-white p-8 rounded shadow-xl   w-max'>
        <h2 className=' text-2xl text-center m-2'>Add A Product</h2>
        <img className='  w-5 h-5 relative top-[-67px] right-[-12px] float-right hover:cursor-pointer' src={delImage} onClick={() => setOpen(false)} alt='deletebutton' />
        <form onSubmit={handleSubmit}>
          <div className=' flex'>
            <div>
              <img className='  w-28  h-28' src={img} alt='img' />
              <input type='file' name='photos' id='photos' multiple onChange={(e) => setFiles(e.target.files)} />
            </div>
            <div className='flex flex-col'>
              <span className='block'>Name</span>
              <input className=' outline-none border-b-2 border-slate-500 m-2' type='text' name='name' required onChange={handleChange} />
              <span className='block'>Age Category</span>
              <select className=' outline-none border-2 border-slate-500 m-2' type='text' name='ageCategory' onChange={handleChange} value={ProductInfo.ageCategory} >
                {ageCategories.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <span className='block'>Category</span>
              <select className=' outline-none border-2 border-slate-500 m-2' type='text' name='category' required onChange={handleChange} value={ProductInfo.category} >
                {clothingCategories.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <span className='block'>description</span>
          <textarea
            className='outline-none p-1 h-24 w-full border-2 border-slate-500 resize-none m-2'
            type='text'
            name='description' required onChange={handleChange} value={ProductInfo.description}

          />
          <div className='flex justify-between'>
            <div className='flex justify-between items-center'>
              <span className=' w-10' >brand</span>
              <select className=' outline-none p-2 h-12   w-32 border-2 border-slate-500 m-2' type='text' name='brand' required onChange={handleChange} value={ProductInfo.brand}>
                {brandOptions.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <span >price</span>
              <input type='number' className='outline-none  border-b-2 border-slate-500 m-2' name='price' required onChange={handleChange} value={ProductInfo.price} />
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex justify-between items-center'>
              <span className=' w-10'>size</span>
              <select className=' outline-none p-2 h-12 w-32  border-2 border-slate-500 m-2' type='text' name='size' onChange={handleChange} value={ProductInfo.size} >
                {sizeOptions.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <span className=' w-8 flex' >stock</span>
              <input type='number' className='outline-none border-b-2 border-slate-500 m-2' name='stock' onChange={handleChange} value={ProductInfo.stock} />
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-center items-center'>
              <span >color</span>
              <select className=' outline-none p-2 h-12  border-2 border-slate-500 m-2' type='text' name='colors' onChange={handleChange} value={ProductInfo.colors} >
                {colorOptions.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className='flex flex-row justify-center items-center mb-1'>
              <span className='  m-1 flex'>featured Product ?</span>
              <select className=' outline-none p-2 h-12 w-32 border-2 border-slate-500' name='featuredProduct m-2' onChange={handleChange} value={ProductInfo.featuredProduct}>
                <option value='false'>No</option>
                <option value='true'>Yes</option>

              </select>
            </div>
          </div>

          <input
            className=' outline-none border-2 border-slate-500 m-2 p-3'
            type='text'
            name='tags'
            placeholder='Add tags eg:-yellow tshirts'
            onChange={handleTagsChange}
            value={ProductInfotag.newTag}
          />
          <button type='button' onClick={addTag}>Add</button>
          <div>
            {ProductInfotag.tags.map((tag, index) => (
              <span key={index} className='tag block'>
                {tag}
              </span>
            ))}
          </div>
          <div>
            <span >Discount</span>
            <input type='number' className='outline-none  border-b-2 border-slate-500 m-2' name='discount' required onChange={handleChange} value={ProductInfo.discount} />
          </div>
          <div className=' items-center justify-center flex mt-3'>
            <button type='submit' className=' justify-center items-center flex w-24 hover:cursor-pointer  hover:bg-cyan-400  font-bold h-12 p-1  rounded-md bg-[#e93d67] text-amber-50 shadow-2xl ' >{load ? <div className='w-7 h-7 rounded-full border-t-1 border-b-4 border-dashed border-white animate-spin'></div> : 'Register'}</button>
          </div>
        </form>
      </div>

    </div>
  )
}
