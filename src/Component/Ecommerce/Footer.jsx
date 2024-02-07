import React from 'react'

export const Footer = () => {
    return (
        <div className='w-full  mt-5 bg-black h-full flex justify-center items-center'>
            <div className='h-[75%] w-[75%]  flex flex-col justify-between   border-white'>
                <div className="flex justify-between space-x-8 p-4">

                    <div  className='text-white'>
                        <h2 className="text-lg text-yellow-400  font-semibold mb-2">Customer Service</h2>
                        <ul>
                            <li className="list-disc">Contact Us</li>
                            <li className="list-disc">FAQs</li>
                            <li className="list-disc">Support</li>
                        </ul>
                    </div>

                    <div className='text-white'>
                        <h2 className="text-lg  text-yellow-400 font-semibold mb-2">About Company</h2>
                        <ul>
                            <li className="list-disc">Our Story</li>
                            <li className="list-disc">Mission</li>
                            <li className="list-disc">Team</li>
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-lg  text-yellow-400 font-semibold mb-2">Social Links</h2>
                        <ul className="flex space-x-2">
                            <li>
                                <a href="#d" className="text-blue-500">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#d" className="text-blue-500">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#d" className="text-blue-500">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=' border-t-2 border-white flex justify-between p-12'>
                    <div className=' '>
                        <ul className='text-white hover:cursor-pointer'>
                            <li>contact us</li>
                            <li> Donot try to contact us</li>
                            <li>BTW why you will contact us</li>
                            <li>contact us</li>
                            <li> Donot try to contact us</li>
                            <li>BTW why you will contact us</li>
                            <li>contact us</li>
                            <li> Donot try to contact us</li>
                            <li>BTW why you will contact us</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-white hover:cursor-pointer'>
                            <li>instagram</li>
                            <li>what instagram</li>
                            <li>kaika instagram</li>
                            <li>contact us</li>
                            <li> Donot try to contact us</li>
                            <li>BTW why you will contact us</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-white hover:cursor-pointer'>
                            <li>facebook </li>
                            <li>what facebook</li>
                            <li>nobody is on facebook now</li>
                            <li>contact us</li>
                            <li> Donot try to contact us</li>
                            <li>BTW why you will contact us</li>
                        </ul>
                    </div>
                </div>
                <h1 className=' text-center m-3 text-white'> &copy; 2023 Ecommerce. All Rights Reserved.</h1>
            </div>



        </div>

    )
}
