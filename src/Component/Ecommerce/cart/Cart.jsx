import React, { useEffect, useState } from 'react'
import { Progress } from './Progress'
import { Footer } from '../Footer'
import QuantityModal from '../Modals/QuantityModal';
import { IoIosArrowDown } from "react-icons/io";
import SizeModal from '../Modals/SizeModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartsGetAllProducts, deletecartProduct, updatecartProduct } from '../../../redux_toolkit/cartSlice';
import { Cartloader } from '../../../utils/Cartloader';
import { AddWishlistGProduct } from '../../../redux_toolkit/wishlistSlice';
import noproduct from '../../../photos/oops.svg'
export const Cart = () => {


    

    const cartstate = useSelector((state) => state.cartproducts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [productQuantities, setProductQuantities] = useState({});
    const [productQty, setProductQty] = useState({});
    const [selectedProductQty, setQtyproduct] = useState('');
    const [Qtyopen, QtysetOpen] = React.useState(false);

    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [border, setBorder] = React.useState('');

    const QtyhandleClose = async (id, product) => {
        console.log(id)

        const quantity = productQty[id]?.quantity || product.quantity;
        const data = {
            ProductId: id,
            quantity: quantity
        }
        QtysetOpen(false);
        if (quantity !== undefined) {
            await dispatch(updatecartProduct(data));
        };
        // console.log(quantity);
      //  QtysetOpen(false);
    }

    const handleSetSize = (productId, size, index) => {
        setBorder(index);
        const newQuantities = {
            ...productQuantities,
            [productId]: { ...productQuantities[productId], size: size, },
        };
        setProductQuantities(newQuantities);
    }

    const handleOpenQty = (product) => {
        setQtyproduct(product);
        QtysetOpen(true);
    }

    const handleSetqty = (productId, size, index) => {
        setBorder(index);
        const newQuantities = {
            ...productQty,
            [productId]: { ...productQty[productId], quantity: size, },
        };
        setProductQty(newQuantities);
    }


    const handleOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    }

    const handleClose = async (id, product) => {
        const size = productQuantities[id]?.size || product.size;
        console.log(size);
        const data = {
            ProductId: id,
            size: size
        }
        setOpen(false);
        if (size !== undefined) {
            await dispatch(updatecartProduct(data));
        };
       // setOpen(false);
    }


    const fetchProducts = () => {
        dispatch(cartsGetAllProducts());
    };
    useEffect(() => {
        fetchProducts()
    }, [cartstate?.cartProducts?.length]);

    const products = cartstate?.cartProducts;
    const handledeletecart = async (id) => {
        await dispatch(deletecartProduct(id));
    }
    const moveTowishList = async (product) => {
        const body = { ProductId: product?.ProductId?._id, FinalPrice: product?.FinalPrice }
        await dispatch(AddWishlistGProduct(body));
        await dispatch(deletecartProduct(product?._id));
    }
    let subtotal;
    let deliveryfee;
    let discountmrp;
    let totalmrp;
    const storedUserData = localStorage.getItem('user');
    if (!storedUserData) {
        // 
        navigate('/login')
      }
    if (products.length !== 0) {
        discountmrp = products.reduce((acc, productitm) => acc + productitm.FinalPrice * productitm.quantity, 0);

        totalmrp = products.reduce((acc, productitm) => acc + (productitm?.ProductId?.price) * (productitm?.quantity), 0);
        deliveryfee = discountmrp >= 2000 ? 0 : 200;
        subtotal = discountmrp + deliveryfee;
    }
    // dispatch(cartsGetAllProducts());
    if (cartstate?.cartProducts?.length === 0) {
        return (
            <div className='relative w-full'>
                <header className=' fixed top-0 w-full z-10'>
                    <div className='w-full h-20 bg-white  border-gray-500  z-20   shadow-xl '>
                        <div className='flex h-full items-center'>
                            <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                                <span  onClick={()=>navigate('/')}  className='text-xl'>Ecommerce.</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='w-full h-20 mt-20 '>
                    <Progress />
                </div>
                <div className='flex justify-center items-center h-screen w-full'>
                    <div className='h-screen w-full justify-center items-center flex flex-col'>
                        <img className='h-[60%] w-[60%]' src={noproduct} />
                        <span className='text-2xl font-mono font-bold m-5'> ⚠️ Hey Your Cart is empty😢😢😢 </span>
                        <span className='text-xl font-mono m-1'> please consider to buy some products  </span>
                    </div>
                </div>
                <Footer />

            </div>)
    }

    return (
        <div className='relative w-full'>
            {open && <QuantityModal
                open={open}
                handleSetSize={handleSetSize}
                selectedProduct={selectedProduct}

                border={border}
                handleClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            />}
            {Qtyopen && <SizeModal
                open={Qtyopen}
                handleSetSize={handleSetqty}
                selectedProduct={selectedProductQty}

                border={border}
                handleClose={QtyhandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            />}
            <div className='h-4 bg-red-700 w-full absolute shadow-red-300'></div>
            <header className=' fixed top-0 w-full z-10'>
                <div className='w-full h-20 bg-white  border-gray-500  z-20   shadow-xl '>
                    <div className='flex h-full items-center'>
                        <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                            <span className='text-xl'>Ecommerce.</span>
                        </div>
                    </div>
                </div>
            </header>
            <div className='w-full h-20 mt-20 '>
                <Progress />
            </div>
            {cartstate?.loading ? <Cartloader /> :
                <div className='p-4 full flex justify-center items-center '>
                    <div className='w-[80%] flex'>
                        <div className='flex-[55%] flex flex-col w-full p-4 '>
                            <div className='flex p-6 justify-between items-center border-[1px] border-gray-300'>
                                <span>Deliverd to:761105</span>
                                <button className='text-red-400 h-10 w-max p-2 font-mono  border-[1px] border-red-400 shadow-md'>CHECK PINCODE</button>
                            </div>
                            <div className='p-3'>
                                {products.map((pro, i) => (
                                    <div key={i} className='p-2 flex m-3 w-full h-[18rem] shadow-lg border-[1px] border-gray-300'>

                                        <div className='flex-[75%] m-2 flex-col justify-between flex'>
                                            <div >
                                                <div className='flex justify-between '>
                                                    <span className=' font-bold text-base capitalize'> {pro?.ProductId?.brand}</span>
                                                    {/* <span className=' font-bold'>Rs.{pro.price}</span> */}
                                                </div>
                                                <span className='text-gray-500 text-base flex w-max'>{pro?.ProductId?.category}</span>
                                                <div>

                                                    <div className='bg-white p-2 border-[1px] flex border-gray-300 w-max hover:cursor-pointer' onClick={() => handleOpen(pro)} >
                                                        <span className='text-gray-600 flex items-center'>Size : <b id="testChangeSize">{productQuantities[pro?._id]?.size || pro.size || 'M'}</b>
                                                            <IoIosArrowDown /></span>
                                                    </div>
                                                    <div className='bg-white p-2 border-[1px] flex border-gray-300 w-max hover:cursor-pointer' onClick={() => handleOpenQty(pro)} >
                                                        <span className='text-gray-600 flex items-center'>Qty : <b id="testChangeSize">{productQty[pro?._id]?.quantity || pro.quantity || 1}</b>
                                                            <IoIosArrowDown /></span>
                                                    </div>

                                                </div>

                                                <span name='FinalPrice' className='text-sm font-bold'>Total Rs. {(
                                                    pro.FinalPrice * (pro?.quantity || 1)
                                                )}
                                                    <del className='font-thin ml-1 text-gray-600'>
                                                        {(pro?.ProductId?.price * (pro?.quantity || 1)).toFixed(0)}
                                                    </del> <span className='text-red-400'> {pro?.ProductId?.discount}% OFF</span>
                                                </span>
                                            </div>
                                            <div className=' justify-start flex flex-row'>
                                                <button onClick={() => handledeletecart(pro?._id)} className='border-[1px] border-gray-300 shadow-md  p-2 font-semibold text-sm text-gray-500'>REMOVE</button>
                                                <button onClick={() => moveTowishList(pro)} className=' mx-2 border-[1px] border-gray-300 shadow-md p-2 font-semibold text-sm text-gray-500'>MOVE TO WISHLIST</button>
                                            </div>

                                        </div>
                                        <div className='flex-[25%] relative flex-col flex gap-3'>
                                            <img className='w-[200px] h-[200px] rounded-md' src={pro?.ProductId?.images[0].url} alt='img' />
                                            <span className={`z-1 text-xs border-1 border-gray-400 bg-[#000000a9]
                       
                         text-[white] p-1 absolute top-2 right-1 rounded-md shadow-md `}>{pro?.ProductId?.brand}</span>
                                            <span className='p-4 font-bold'>Rs.{pro?.ProductId?.price}</span>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className='flex-[45%] w-full flex  items-center flex-col relative  '>
                            <div className='flex justify-center items-center bg-[#117a7a] text-white font-bold w-[65%] m-6 p-3 h-max'>
                                <span>Save an additional amount on this order</span>
                            </div>
                            <div className='flex justify-center items-center bg-[#f1f4f4] text-gray-700 font-bold w-[65%] m-3 p-3 h-max'>
                                <img className='w-[15px] h-[15px]' src='https://images.bewakoof.com/web/Red-truck.png' alt='trucj' />
                                <span>Yay! You get FREE delivery on this order</span>
                            </div>
                            <div className='m-5  border-[1px] border-gray-300 w-[65%] flex flex-col '>
                                <div className='w-full shadow-sm bg-gray-200 font-semibold p-3 flex border-b-[1px] border-gray-300 justify-center items-center'>
                                    <span  >
                                        PRICE SUMMARY
                                    </span>
                                </div>

                                <div className='flex  flex-col w-full '>
                                    <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                        <span className='text-gray-500'>Total MRP  </span>
                                        <span>₹{totalmrp}</span>
                                    </div>
                                    <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                        <span className='text-gray-500'>Discount MRP  </span>
                                        <span >₹{discountmrp}</span>
                                    </div>
                                    <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                        <span className='text-gray-500'>Delivery Fee </span>
                                        <span className='text-green-700 '>₹{deliveryfee}</span>
                                    </div>
                                    <div className='flex p-2 justify-between  border-b-[1px] border-gray-300'>
                                        <span>Subtotal </span>
                                        <span className='font-bold text-lg'>₹{subtotal}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[65%] p-2 flex flex-col  border-[1px] border-gray-300'>
                                <div className='flex justify-between m-3'>
                                    <span>
                                        Total ₹ {subtotal}
                                    </span>
                                    <button onClick={() => navigate('/user/deliver-address')} className='p-3 h-max w-max font-bold text-white rounded-xl bg-red-500'>ADD ADDRESS</button>
                                </div>
                                <div className='flex justify-between'>
                                    <img className='w-12 h-12' src='https://images.bewakoof.com/web/cart-badge-trust.svg' alt='img' />
                                    <img className='w-12 h-12' src='https://images.bewakoof.com/web/cart-easy-return.svg' alt='img' />
                                    <img className='w-12 h-12' src='https://images.bewakoof.com/web/quality-check.svg' alt='img' />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>}
            <Footer />
        </div>
    )
}
