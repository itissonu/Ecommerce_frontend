import React, { useEffect } from 'react'
import { Footer } from '../Component/Ecommerce/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { ordersGetAllProducts } from '../redux_toolkit/orderSlice';
import { Loaderproduct } from '../Component/Ecommerce/Loaderproduct';
export const MyOrders = () => {
    // const orders = [
    //     {
    //         "personInfo": {
    //             "address": "polasara",
    //             "city": "kalamba",
    //             "state": "odisha",
    //             "country": "india",
    //             "pinCode": 761105,
    //             "phoneNo": 9692429955
    //         },
    //         "paymentInfo": {
    //             "id": "payment_id_here",
    //             "status": "Paid"
    //         },
    //         "_id": "65753f48ca8db3f2284641f9",
    //         "orderItems": [
    //             {
    //                 "price": 100.99,
    //                 "quantity": 2,
    //                 "size": "M",
    //                 "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                 "product": {
    //                     "_id": "656f713701d951f4682f96e2",
    //                     "name": "Example Product",
    //                     "description": "This is an example product description.",
    //                     "category": "Electronics",
    //                     "brand": "Example Brand",
    //                     "price": 499.99,
    //                     "discount": 0.1,
    //                     "discountPrice": 449.99,
    //                     "stock": 100,
    //                     "ratings": [
    //                         {
    //                             "name": "John Doe",
    //                             "rating": 4.5,
    //                             "comment": "Great product!",
    //                             "_id": "656f713701d951f4682f96e3"
    //                         },
    //                         {
    //                             "name": "Jane Doe",
    //                             "rating": 5,
    //                             "comment": "Amazing!",
    //                             "_id": "656f713701d951f4682f96e4"
    //                         }
    //                     ],
    //                     "totalRatings": 2,
    //                     "images": [
    //                         {
    //                             "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                             "_id": "656f713701d951f4682f96e5"
    //                         },
    //                         {
    //                             "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
    //                             "_id": "656f713701d951f4682f96e6"
    //                         }
    //                     ],
    //                     "featuredProduct": true,
    //                     "colors": [
    //                         "Black",
    //                         "White",
    //                         "Blue"
    //                     ],
    //                     "size": [
    //                         "S",
    //                         "M",
    //                         "L"
    //                     ],
    //                     "createdAt": "2023-12-05T18:51:35.408Z",
    //                     "__v": 0,
    //                     "Stock": -9,
    //                     "ageCategory": "Others",
    //                     "avgRatings": 0
    //                 },
    //                 "_id": "65753f48ca8db3f2284641fa"
    //             },
    //             {
    //                 "price": 100.99,
    //                 "quantity": 1,
    //                 "size": "L",
    //                 "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                 "product": {
    //                     "_id": "656f73f2b35b98eeca457422",
    //                     "name": "Example Product 2",
    //                     "description": "This is an example product description.of product2",
    //                     "category": "topwear",
    //                     "brand": "Example Brand",
    //                     "price": 499.99,
    //                     "discount": 0.1,
    //                     "Stock": 94,
    //                     "ratings": [
    //                         {
    //                             "name": "John Doe",
    //                             "rating": 4.5,
    //                             "comment": "Great product!",
    //                             "_id": "656f73f2b35b98eeca457423"
    //                         },
    //                         {
    //                             "name": "Jane Doe",
    //                             "rating": 5,
    //                             "comment": "Amazing!",
    //                             "_id": "656f73f2b35b98eeca457424"
    //                         }
    //                     ],
    //                     "totalRatings": 2,
    //                     "images": [
    //                         {
    //                             "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                             "_id": "656f73f2b35b98eeca457425"
    //                         },
    //                         {
    //                             "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
    //                             "_id": "656f73f2b35b98eeca457426"
    //                         }
    //                     ],
    //                     "featuredProduct": true,
    //                     "colors": [
    //                         "Black",
    //                         "White",
    //                         "Blue"
    //                     ],
    //                     "size": [
    //                         "S",
    //                         "M",
    //                         "L"
    //                     ],
    //                     "createdAt": "2023-12-05T19:03:14.717Z",
    //                     "__v": 0,
    //                     "ageCategory": "Others",
    //                     "avgRatings": 0
    //                 },
    //                 "_id": "65753f48ca8db3f2284641fb"
    //             }
    //         ],
    //         "userId": "656e0dfdc0a96c1cc45da17b",
    //         "paidAt": "2023-12-09T12:00:00.000Z",
    //         "itemsPrice": 69.97,
    //         "taxPrice": 20,
    //         "shippingPrice": 20,
    //         "totalPrice": 109.97,
    //         "orderStatus": "Delivered",
    //         "createdAt": "2023-12-10T04:32:08.855Z",
    //         "__v": 0,
    //         "deliveredAt": "2023-12-10T14:03:42.720Z"
    //     },
    //     {
    //         "personInfo": {
    //             "address": "kalamba",
    //             "city": "polasara",
    //             "state": "odisha",
    //             "country": "india",
    //             "pinCode": 761105,
    //             "phoneNo": 9692429955
    //         },
    //         "paymentInfo": {
    //             "id": "payment_id_here",
    //             "status": "Paid"
    //         },
    //         "_id": "65754640034059a33d164523",
    //         "orderItems": [
    //             {
    //                 "price": 229.99,
    //                 "quantity": 2,
    //                 "size": "M",
    //                 "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                 "product": {
    //                     "_id": "656f713701d951f4682f96e2",
    //                     "name": "Example Product",
    //                     "description": "This is an example product description.",
    //                     "category": "Electronics",
    //                     "brand": "Example Brand",
    //                     "price": 499.99,
    //                     "discount": 0.1,
    //                     "discountPrice": 449.99,
    //                     "stock": 100,
    //                     "ratings": [
    //                         {
    //                             "name": "John Doe",
    //                             "rating": 4.5,
    //                             "comment": "Great product!",
    //                             "_id": "656f713701d951f4682f96e3"
    //                         },
    //                         {
    //                             "name": "Jane Doe",
    //                             "rating": 5,
    //                             "comment": "Amazing!",
    //                             "_id": "656f713701d951f4682f96e4"
    //                         }
    //                     ],
    //                     "totalRatings": 2,
    //                     "images": [
    //                         {
    //                             "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                             "_id": "656f713701d951f4682f96e5"
    //                         },
    //                         {
    //                             "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
    //                             "_id": "656f713701d951f4682f96e6"
    //                         }
    //                     ],
    //                     "featuredProduct": true,
    //                     "colors": [
    //                         "Black",
    //                         "White",
    //                         "Blue"
    //                     ],
    //                     "size": [
    //                         "S",
    //                         "M",
    //                         "L"
    //                     ],
    //                     "createdAt": "2023-12-05T18:51:35.408Z",
    //                     "__v": 0,
    //                     "Stock": -9,
    //                     "ageCategory": "Others",
    //                     "avgRatings": 0
    //                 },
    //                 "_id": "65754640034059a33d164524"
    //             },
    //             {
    //                 "price": 919.99,
    //                 "quantity": 1,
    //                 "size": "L",
    //                 "image": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                 "product": {
    //                     "_id": "656f73f2b35b98eeca457422",
    //                     "name": "Example Product 2",
    //                     "description": "This is an example product description.of product2",
    //                     "category": "topwear",
    //                     "brand": "Example Brand",
    //                     "price": 499.99,
    //                     "discount": 0.1,
    //                     "Stock": 94,
    //                     "ratings": [
    //                         {
    //                             "name": "John Doe",
    //                             "rating": 4.5,
    //                             "comment": "Great product!",
    //                             "_id": "656f73f2b35b98eeca457423"
    //                         },
    //                         {
    //                             "name": "Jane Doe",
    //                             "rating": 5,
    //                             "comment": "Amazing!",
    //                             "_id": "656f73f2b35b98eeca457424"
    //                         }
    //                     ],
    //                     "totalRatings": 2,
    //                     "images": [
    //                         {
    //                             "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
    //                             "_id": "656f73f2b35b98eeca457425"
    //                         },
    //                         {
    //                             "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
    //                             "_id": "656f73f2b35b98eeca457426"
    //                         }
    //                     ],
    //                     "featuredProduct": true,
    //                     "colors": [
    //                         "Black",
    //                         "White",
    //                         "Blue"
    //                     ],
    //                     "size": [
    //                         "S",
    //                         "M",
    //                         "L"
    //                     ],
    //                     "createdAt": "2023-12-05T19:03:14.717Z",
    //                     "__v": 0,
    //                     "ageCategory": "Others",
    //                     "avgRatings": 0
    //                 },
    //                 "_id": "65754640034059a33d164525"
    //             }
    //         ],
    //         "userId": "656e0dfdc0a96c1cc45da17b",
    //         "paidAt": "2023-12-09T12:00:00.000Z",
    //         "itemsPrice": 69.97,
    //         "taxPrice": 20,
    //         "shippingPrice": 20,
    //         "totalPrice": 1099.97,
    //         "orderStatus": "Shipped",
    //         "createdAt": "2023-12-10T05:01:52.714Z",
    //         "__v": 0
    //     },

    // ]
    const ordersState = useSelector((state) => state?.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(ordersGetAllProducts());
        };

        fetchProducts()
    }, [dispatch]);
    const orders = ordersState?.orderProducts
    if (!ordersState?.orderProducts) {

        return (
            <div>
                <header className=' fixed top-0 w-full z-10'>
                    <div className='w-full h-20 bg-white  border-gray-500  z-20   shadow-xl '>
                        <div className='flex h-full items-center'>
                            <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                                <span className='text-xl'>Ecommerce.</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='mt-20 flex justify-center bg-red-700 text-white font-serif font-extrabold'>
                    <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'> MY ORDERS</h2>
                </div>
                <div className='flex justify-center items-center h-screen'>
                    <Loaderproduct />
                </div>
                <Footer />
            </div>
        );
    }
    if (ordersState?.orderProducts?.length === 0) {

        return (
            <div>
                <header className=' fixed top-0 w-full z-10'>
                    <div className='w-full h-20 bg-white  border-gray-500  z-20   shadow-xl '>
                        <div className='flex h-full items-center'>
                            <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                                <span className='text-xl'>Ecommerce.</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='mt-[7.5rem] flex justify-center bg-red-700 text-white font-serif font-extrabold'>
                    <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'>
                        MY ORDERS
                    </h2>
                </div>
                <div className='flex justify-center items-center h-screen'>
                    <p>No products in the my orders.</p>
                </div>
                <Footer />
            </div>
        );
    }
    return (
        <div className='w-full  relative'>


            <header className=' fixed top-0 w-full z-10'>
                <div className='w-full h-20 bg-white  border-gray-500  z-20   shadow-xl '>
                    <div className='flex h-full items-center'>
                        <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                            <span className='text-xl'>Ecommerce.</span>
                        </div>
                    </div>
                </div>
            </header>
            {/* <div className='h-4 mt-20 bg-red-700 w-full shadow-red-300'></div> */}
            <div className='mt-20 flex justify-center bg-red-700 text-white font-serif font-extrabold'>
                <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'> MY ORDERS</h2>
            </div>
            {ordersState?.orderProducts && <div>
                {
                    orders?.map((order, index) => (
                        <div>
                            {order?.orderItems?.map((singleProduct, i) => (
                                <div className='flex flex-col border-[1px] border-gray-300 w-1/2 p-9 m-2 shadow-lg'>
                                    <div className='flex w-full  m-4'>
                                        <div className='flex flex-[60%]'>
                                            <img className='mx-4 h-20 w-20 rounded-sm' src={singleProduct.image} />
                                            <div >
                                                <span className='font-bold text-stone-800 block'> {singleProduct.product.brand}</span>
                                                <span className=' text-gray-500 block'> {singleProduct.product.name}</span>
                                                <span className=' text-gray-500 text-xs block'>Rs. ₹{singleProduct.price}</span>
                                                <span className='text-gray-500 text-xs '>Size- {singleProduct.size}{' '} |{' '}</span>
                                                <span className=' text-gray-500 text-xs '>Qty- {singleProduct.quantity}</span>

                                                <span className=' text-gray-500 text-xs block'>Delevry fee Rs.₹ {order.shippingPrice === 0 ? 'Free' : order.shippingPrice}</span>
                                                <span className=' text-gray-500 text-xs block'> {''} Tax(includes GST)-₹{order.taxPrice}</span>

                                                <span className='  text-gray-500 font-semibold block'> Ordered at-  {new Date(order.createdAt).toLocaleString()}</span>
                                            </div>

                                        </div>
                                        <div className='flex flex-[40%] justify-end' >
                                            <div className='flex flex-col w-max h-max p-3 bg-[whitesmoke] justify-center'>
                                                <span className='text-white font-bold p-2 rounded-lg bg-green-700'>Delivery Status -{order.orderStatus}</span>
                                                <span className='text-gray-800  font-semibold'> Payment Status -{order.paymentInfo.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-slate-200 p-2 border-[1px] border-gray-100 shadow-sm'>
                                        <h1 className='font-bold text-lg capitalize'>Delivery Address </h1>
                                        <span className='block capitalize  text-gray-800'> {order.personInfo.address}</span>
                                        <span className='block capitalize  text-gray-800'> {order.personInfo.city}, {order.personInfo.country}</span>
                                        <span className='font-semibold text-gray-600'> {order.personInfo.phoneNo} | {order.personInfo.pinCode}</span>
                                    </div>
                                    <div className='flex justify-end  w-full'>
                                        <div className='border-[1px] border-red-400 h-max  p-3 m-3'> <span className='mx-2 text-gray-700'>Total Price</span>
                                            <span className='font-bold text-gray-800'>₹ {((singleProduct.price * singleProduct.quantity) + (order.shippingPrice) + (order.taxPrice)).toFixed(2)}</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>}
            <Footer />
        </div>
    )
}
