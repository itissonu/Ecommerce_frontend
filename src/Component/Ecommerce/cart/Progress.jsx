import React from 'react'

export const Progress = () => {
  const carts = {
    "cartitems": [
        {
            "_id": "6572ed06375abf5f940ee69f",
            "ProductId": {
                "_id": "656f73f2b35b98eeca457422",
                "name": "Example Product 2",
                "description": "This is an example product description.of product2",
                "category": "topwear",
                "brand": "Example Brand",
                "price": 499.99,
                "discount": 0.1,
                "Stock": 94,
                "ratings": [
                    {
                        "name": "John Doe",
                        "rating": 4.5,
                        "comment": "Great product!",
                        "_id": "656f73f2b35b98eeca457423"
                    },
                    {
                        "name": "Jane Doe",
                        "rating": 5,
                        "comment": "Amazing!",
                        "_id": "656f73f2b35b98eeca457424"
                    }
                ],
                "totalRatings": 2,
                "images": [
                    {
                        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
                        "_id": "656f73f2b35b98eeca457425"
                    },
                    {
                        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
                        "_id": "656f73f2b35b98eeca457426"
                    }
                ],
                "featuredProduct": true,
                "colors": [
                    "Black",
                    "White",
                    "Blue"
                ],
                "size": [
                    "S",
                    "M",
                    "L"
                ],
                "createdAt": "2023-12-05T19:03:14.717Z",
                "__v": 0,
                "ageCategory": "Others",
                "avgRatings": 0
            },
            "userId": "656e0dfdc0a96c1cc45da17b",
            "quantity": 15,
            "color": "Blue",
            "size": null,
            "FinalPrice": 998,
            "__v": 0
        },
        {
            "ProductId": {
                "avgRatings": 0,
                "ageCategory": "Others",
                "_id": "656f7470b35b98eeca457429",
                "name": "Wrong tshirt",
                "description": "This is an example product description.of product2",
                "category": "Shirt",
                "brand": "Wrong",
                "price": 499.99,
                "discount": 0.5,
                "Stock": 1100,
                "ratings": [
                    {
                        "name": "John Doe",
                        "rating": 4.5,
                        "comment": "Great product!",
                        "_id": "656f7470b35b98eeca45742a"
                    },
                    {
                        "name": "Jane Doe",
                        "rating": 5,
                        "comment": "Amazing!",
                        "_id": "656f7470b35b98eeca45742b"
                    }
                ],
                "totalRatings": 2,
                "images": [
                    {
                        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
                        "_id": "65702a6ed65a6bece2366777"
                    },
                    {
                        "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
                        "_id": "65702a6ed65a6bece2366778"
                    }
                ],
                "featuredProduct": false,
                "colors": [
                    "Black",
                    "White",
                    "Blue"
                ],
                "size": [
                    "S",
                    "M",
                    "L"
                ],
                "createdAt": "2023-12-05T19:05:20.193Z",
                "__v": 0
            },
            "userId": "656e0dfdc0a96c1cc45da17b",
            "quantity": 6,
            "color": "Blue",
            "size": null,
            "FinalPrice": 1998,
            "__v": 0
        }
    ]
}
  return (
    <div className='flex justify-center w-full h-16 items-center border-b-[1px] border-gray-200 shadow-sm'>
        <div className='border-b-2 text-green-500 font-bold border-green-500 p-2 font-mono h-max w-max'>
                BAG
        </div>
        <div className=' p-2 h-max w-max  text-green-500 '>
            ------
        </div>
        <div className=' p-2 h-max w-max font-mono'>
           ADDRESS
        </div>
        <div className=' p-2 h-max w-max'>
        ------
        </div>
        <div className='p-2 h-max w-max font-mono'>
            PAYMENT
        </div>
        {/* <div className='flex justify-center items-center bg-[#117a7a] text-white font-bold w-[60%] m-6 p-3 h-max'>
                            <span>Save an additional amount on this order</span>
                        </div>
                        <div className='flex justify-center items-center bg-[#f1f4f4] text-gray-700 font-bold w-[60%] m-3 p-3 h-max'>
                            <img className='w-[15px] h-[15px]' src='https://images.bewakoof.com/web/Red-truck.png' alt='trucj' />
                            <span>Yay! You get FREE delivery on this order</span>
                        </div>
                        <div className='m-5 p-1 border-[1px] border-gray-300 w-[60%] flex flex-col'>
                            <span className='w-full'>
                                PRICE SUMMARY
                            </span>
                            <div className='flex  flex-col w-full'>
                            <div className='flex'>
                                <span>Total MRP (Incl. of taxes) </span>
                                <span>₹1299</span>
                                </div>
                                <div className='flex '>
                                    <span>Discount MRP (Incl. of taxes) </span>
                                    <span>₹1299</span>
                                </div>
                            </div>
                        </div> */}
    </div>

  )
  
}
