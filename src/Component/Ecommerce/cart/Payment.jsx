import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Progress } from './Progress';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineVpnKey } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('your_stripe_publishable_key');

const Payment =() => {
    const navigate=useNavigate();
    const handlSubmit = async (e) => {
        e.preventDefault();
   const valu=   await  checkOutJandler();
   
   navigate('/login')
    }
    const[paymentid,setpaymentid]=useState('')
  //  console.log(paymentid);
   // const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
  //  const storedOrderDataString = sessionStorage.getItem('orderData');
    // if (storedOrderDataString) {
    //     const storedOrderData = JSON.parse(storedOrderDataString);
    //     console.log(storedOrderData);
    // }
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
        const result = await axios.post("http://localhost:8001/app/order/orders/checkout");
        
        if (!result) {
            alert("something went wrong")
            return;
        }
          
        const { amount, id: order_id, currency } = result.data.order
        
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
                setpaymentid(response.razorpay_payment_id);
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
    return (
        <div className='w-full relative'>
            <div className='h-4 bg-red-700 w-full absolute shadow-red-300'></div>

            <div className='w-full h-20'>
                <Progress />
            </div>
            <div className='flex w-full justify-center items-center h-[90vh] '>
                <div className=" flex flex-col w-[25%] h-[max] p-7 items-center border-[1px] border-gray-400 shadow-lg  ">
                   
                   
                    
                    {/* <button onClick={handlSubmit}>confirm the payment</button> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;
