import React from 'react'
import Image from "next/image";

import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
function Product({id, title, price, description, category, image}) {

    const [hasPrime]=useState(Math.random()<0.5);
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 '>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>
        <h3 className='my-3'>{title}</h3>
        
        <p className='text-xs my-2 line-clamp-2'>{description}</p>

        <div className='mb-5 text-black'>
            <CurrencyFormat quantity={price} />
        </div>
        {hasPrime && (
            <div className='flex items-center space-x-2 mt-5'>
                <img className='w-12 ' src="https://links.papareact.com/fdw" alt="" srcset="" />
                <p className='text-xs text-gray-400'>FREE Next-day Delivery</p>
            </div>
        )}

        <button className='mt-auto button'>Add to basket</button>

    </div>
  )
}

export default Product