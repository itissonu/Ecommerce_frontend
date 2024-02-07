import React, { useEffect, useState } from 'react'
import { Progress } from './Progress'
import { Footer } from '../Footer'
import { AddressModal } from '../Modals/AddressModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartsGetAllProducts, deletecartProduct } from '../../../redux_toolkit/cartSlice';
import axios from 'axios';
import { AddOrdersProduct } from '../../../redux_toolkit/orderSlice';

export const AddAddress = () => {
    const [open, setOpen] = useState(false);
    const [existingAddress, setAddress] = useState([]);
    const [addres, setAddres] = useState('');
    const [selectedAddress, setSelectedAddress] = useState(null);
    const navigate = useNavigate();
    const [addvalue, CheckAddValue] = useState(false)
    const [paymentid, setpaymentid] = useState('')
    const cartstate = useSelector((state) => state.cartproducts);
    const ordersState = useSelector((state) => state.orders);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
//console.log(selectedAddress)
    const dispatch = useDispatch();
    console.log(ordersState);
    const fetchProducts = () => {
        dispatch(cartsGetAllProducts());
    };

    useEffect(() => {
        fetchProducts()
    }, [cartstate?.cartProducts?.length]);
 

    // const carts = {
    //     "cartitems": [
    //         {
    //             "_id": "6572ed06375abf5f940ee69f",
    //             "ProductId": {
    //                 "_id": "656f73f2b35b98eeca457422",
    //                 "name": "Example Product 2",
    //                 "description": "This is an example product description.of product2",
    //                 "category": "topwear",
    //                 "brand": "Example Brand",
    //                 "price": 499.99,
    //                 "discount": 0.1,
    //                 "Stock": 94,
    //                 "ratings": [
    //                     {
    //                         "name": "John Doe",
    //                         "rating": 4.5,
    //                         "comment": "Great product!",
    //                         "_id": "656f73f2b35b98eeca457423"
    //                     },
    //                     {
    //                         "name": "Jane Doe",
    //                         "rating": 5,
    //                         "comment": "Amazing!",
    //                         "_id": "656f73f2b35b98eeca457424"
    //                     }
    //                 ],
    //                 "totalRatings": 2,
    //                 "images": [
    //                     {
    //                         "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                         "_id": "656f73f2b35b98eeca457425"
    //                     },
    //                     {
    //                         "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
    //                         "_id": "656f73f2b35b98eeca457426"
    //                     }
    //                 ],
    //                 "featuredProduct": true,
    //                 "colors": [
    //                     "Black",
    //                     "White",
    //                     "Blue"
    //                 ],
    //                 "size": [
    //                     "S",
    //                     "M",
    //                     "L"
    //                 ],
    //                 "createdAt": "2023-12-05T19:03:14.717Z",
    //                 "__v": 0,
    //                 "ageCategory": "Others",
    //                 "avgRatings": 0
    //             },
    //             "userId": "656e0dfdc0a96c1cc45da17b",
    //             "quantity": 15,
    //             "color": "Blue",
    //             "size": 'S',
    //             "FinalPrice": 998,
    //             "__v": 0
    //         },
    //         {
    //             "ProductId": {
    //                 "avgRatings": 0,
    //                 "ageCategory": "Others",
    //                 "_id": "656f7470b35b98eeca457429",
    //                 "name": "Wrong tshirt",
    //                 "description": "This is an example product description.of product2",
    //                 "category": "Shirt",
    //                 "brand": "Wrong",
    //                 "price": 499.99,
    //                 "discount": 0.5,
    //                 "Stock": 1100,
    //                 "ratings": [
    //                     {
    //                         "name": "John Doe",
    //                         "rating": 4.5,
    //                         "comment": "Great product!",
    //                         "_id": "656f7470b35b98eeca45742a"
    //                     },
    //                     {
    //                         "name": "Jane Doe",
    //                         "rating": 5,
    //                         "comment": "Amazing!",
    //                         "_id": "656f7470b35b98eeca45742b"
    //                     }
    //                 ],
    //                 "totalRatings": 2,
    //                 "images": [
    //                     {
    //                         "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                         "_id": "65702a6ed65a6bece2366777"
    //                     },
    //                     {
    //                         "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
    //                         "_id": "65702a6ed65a6bece2366778"
    //                     }
    //                 ],
    //                 "featuredProduct": false,
    //                 "colors": [
    //                     "Black",
    //                     "White",
    //                     "Blue"
    //                 ],
    //                 "size": [
    //                     "S",
    //                     "M",
    //                     "L"
    //                 ],
    //                 "createdAt": "2023-12-05T19:05:20.193Z",
    //                 "__v": 0
    //             },
    //             "userId": "656e0dfdc0a96c1cc45da17b",
    //             "quantity": 6,
    //             "color": "Blue",
    //             "size": 'M',
    //             "FinalPrice": 1998,
    //             "__v": 0
    //         }
    //     ]
    // }
    const carts = cartstate?.cartProducts || []
    
    useEffect(() => {
        const LocalstgAddress = JSON.parse(localStorage.getItem('addresses')) || [];
        setAddress(LocalstgAddress);
    }, [addres, paymentid]);

    const handleDelete = (index) => {

        const AddressAfterdel = existingAddress.filter((_, i) => i !== index);
        setAddress(AddressAfterdel);
        localStorage.setItem('addresses', JSON.stringify(AddressAfterdel));
    }
    const [border, setBorder] = useState('');
    const handleRadioChange = (index) => {

        setBorder(index);
        setSelectedAddress(existingAddress[index]);
        CheckAddValue(false)
    };

    const itemsPrice = carts.reduce(
        (acc, item) => acc + item.quantity * item.FinalPrice,
        0
    );

    const shippingPrice = itemsPrice > 2000 ? 0 : 200;

    const taxPrice = itemsPrice * 0.12;

    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    const orderItems = [];
    carts.map((cartitm) => (
        orderItems.push({
            price: cartitm.FinalPrice,
            quantity: cartitm.quantity,
            size: cartitm.size,
            image: cartitm?.ProductId?.images[0].url,
            product: cartitm?.ProductId?._id
        })
    ))
    const handleProceedToPayment = async () => {
        if (selectedAddress === null) {
            CheckAddValue(true);
        }
        const timestamp = 1704041194133;
        const paidAtDate = new Date(timestamp);

        if (selectedAddress !== null) {
            const data = {
                orderItems: orderItems, totalPrice, taxPrice, shippingPrice, itemsPrice, selectedAddress,
                paidAt: paidAtDate, orderStatus: "Processing",
            }
            const orderData = JSON.stringify(data);
            sessionStorage.setItem('orderData', orderData);
            setPaymentCompleted(false);

            await checkOutJandler()


        }

    }
    const loadScript = (src) => {

        return new Promise((resolve) => {
            const script = document.createElement("script")
            script.src = src;
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    const checkOutJandler = async () => {

        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        console.log(res)
        if (!res) {
            alert("Razorpay sdk failed to load.Are You Online");
            return;
        }
        console.log(totalPrice)
       // const data={totalPrice:(totalPrice).toFixed(0)}
        const result = await axios.post("http://localhost:8001/app/order/orders/checkout",{amount:totalPrice});

        if (!result) {
            alert("something went wrong")
            return;
        }

        const { amount, id: order_id, currency } = result.data.order
        //    const totalAmount = Math.round(totalPrice * 100);
        const options = {
            key: "rzp_test_xhuYGNI6uqSbts",
            amount: amount,
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:8001/app/order/orders/paymentverification", data, {
                    withCredentials: true,
                });
                // console.log(result)
                if (result) {
                    setpaymentid(response.razorpay_payment_id);
                    setPaymentCompleted(true);
                } else {
                    alert("Payment verification failed");
                }
            },
            prefill: {
                name: "Soumya ranjan",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya ranjan Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    useEffect(() => {
        if (paymentCompleted && paymentid && selectedAddress !== null) {
            const timestamp = 1704041194133;
        const paidAtDate = new Date(timestamp);
            const data = {
                orderItems: orderItems, totalPrice, taxPrice, shippingPrice, itemsPrice,personInfo: selectedAddress,
                paidAt: paidAtDate, orderStatus: "Processing",  paymentInfo: {
                    id: paymentid,
                    status: "Paid",
                },
            }
         //   console.log(data);
            dispatch(AddOrdersProduct(data));

            if (cartstate?.success) {
                console.log(cartstate?.cartProducts)
                const deletePromises = cartstate?.cartProducts.map(element => {
                    return dispatch(deletecartProduct(element?._id));
                });
                Promise.all(deletePromises)
                    .then(() => {
                        console.log("All products removed from the cart");
                    })
                    .catch(error => {
                        console.log( error);
                    });
            }
            
            navigate('/user/payment');
        }
    }, [paymentCompleted,paymentid,dispatch]);


    return (
        <div className='w-full relative'>
            <div className='h-4 bg-red-700 w-full absolute shadow-red-300'></div>
            {open && <AddressModal isOpen={open} setOpen={setOpen} setAddres={setAddres} addres={addres} />}
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
            <div className='p-4 full flex justify-center items-center '>
                <div className='w-[80%] flex'>
                    <div className='flex-[55%] flex flex-col w-full p-4 '>
                        <div className='flex justify-end  border-[1px] p-4  border-gray-300 shadow-md'>

                            <button className='text-red-400 shadow-lg h-10 w-max p-2 font-mono  border-[1px] border-red-400 ' onClick={() => setOpen(true)}>ADD ADDRESS</button>
                        </div>
                        <span className='m-3 font-semibold text-lg text-gray-700'>Deliver to</span>
                        {addvalue && <span className='text-red-600 font-semibold mx-3'>*Pleaze Select an Address</span>}
                        <div>
                            {existingAddress.map((address, index) => (

                                <div key={index} className={`${border === index ? 'border-blue-500 shadow-sky-300' : 'border-slate-200'} w-[60%] flex p-4 shadow-md border-[1px] flex-col m-3`}>
                                    <div className='flex justify-end '><input className='h-5 w-5'
                                        type="radio"
                                        name="addressRadio"
                                        value={index}
                                        checked={selectedAddress === existingAddress[index]}
                                        onChange={() => handleRadioChange(index)}
                                    /></div>

                                    <span className='font-medium capitalize text-gray-700'>Soumya ranjan sahu</span>
                                    <span>{address.pinCode}</span>
                                    <span>{address.address}</span>
                                    <span>{address.state}</span>
                                    <span>{address.city}</span>
                                    <span className='font-bold text-lg'>Phone:{address.phoneNo}</span>
                                    <div className='flex justify-end w-full p-5'>

                                        <button className='border-[1px] shadow-md text-red-500 hover:bg-slate-200 border-gray-400 p-3 mx-2 h-max w-max ' onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className='flex-[45%]  border border-r-[1px] border-gray-200 w-full flex  flex-col  '>
                        {/* {selectedAddress&& <div>
                                    <span> {selectedAddress.address} {selectedAddress.phoneNo} | {selectedAddress.state}</span>
                        </div>} */}
                        <div>
                            <span className='bg-yellow-300 p-2 mx-5'> You are paying for these items</span>
                            {
                                carts.map((product, ind) => (
                                    <div className=' w-[70%] h-max flex border-b-[1px] border-gray-400 p-4 ' key={ind}>
                                        <img className='h-8 w-8 mx-3' src={product?.ProductId?.images[0].url} />
                                        <span className='text-gray-400 text-sm '>{product.ProductId.brand} |{product?.ProductId.name} |Size: {product?.size} | Qty:{product?.quantity}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='m-5  border-[1px] border-gray-300 w-[65%] flex flex-col '>
                            <div className='w-full shadow-sm bg-gray-200 font-semibold p-3 flex border-b-[1px] border-gray-300 justify-center items-center'>
                                <span  >
                                    BILLING DETAIS
                                </span>
                            </div>

                            <div className='flex  flex-col w-full '>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Cart Total  </span>
                                    <span>₹{(itemsPrice).toFixed(2)}</span>
                                </div>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>    GST (Incl. of taxes)  </span>
                                    <span >₹{(taxPrice).toFixed(2)}</span>
                                </div>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Delivery Fee </span>
                                    <span className='text-green-700 '>₹{(shippingPrice).toFixed(2)}</span>
                                </div>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Total Amount </span>
                                    <span className='font-bold text-lg'>₹{(totalPrice).toFixed(2)}</span>
                                </div>
                                <button onClick={handleProceedToPayment} className={`p-3 h-max w-full  rounded-sm bg-[#117a7a] text-white font-bold ${addvalue === true ? 'hover:cursor-not-allowed' : ''}`}>CONTINUE TO PAYMENT</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
