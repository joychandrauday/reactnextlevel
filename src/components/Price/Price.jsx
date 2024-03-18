import React from 'react';
import PropTypes from 'prop-types'
import { FaCheckCircle } from "react-icons/fa";


const Price = ({priceOption}) => {
    const {duration,price,features}=priceOption;
    return (
        <div className='p-4 py-12 bg-gray-600 m-4 rounded text-white'>
            <h1 className="text-5xl font-bold">${price}<span className='font-semibold'>/month</span></h1>
            <div className="my-8">
                {
                    features.map(feature=><h1 className='flex items-center gap-2 justify-center'><FaCheckCircle /> {feature}</h1>)
                }
            </div>

            <h1 className="capitalize text-xl font-bold">duration :{duration}</h1>
            <button className='btn my-4 w-full capitalize font-bold h'>enroll now</button>
        </div>
    );
};
Price.PropTypes ={
    Option: PropTypes.object
}
export default Price;