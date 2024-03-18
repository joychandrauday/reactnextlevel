import React from 'react';
import Price from '../Price/Price';

const PriceOption = () => {
    const gymPricingOptions = [
        {
          "price_id": 1,
          "duration": "1_month",
          "price": 50,
          "features": [
            "Access to basic gym facilities",
            "Limited group classes",
            "No personal training"
          ]
        },
        {
          "price_id": 2,
          "duration": "3_months",
          "price": 120,
          "features": [
            "Access to premium gym facilities",
            "Unlimited group classes",
            "1 free personal training session"
          ]
        },
        {
          "price_id": 3,
          "duration": "6_months",
          "price": 200,
          "features": [
            "Access to premium gym facilities",
            "Unlimited group classes",
            "2 free personal training sessions"
          ]
        },
        {
          "price_id": 4,
          "duration": "1_year",
          "price": 350,
          "features": [
            "Access to premium gym facilities",
            "Unlimited group classes",
            "4 free personal training sessions",
            "Discounts on additional services"
          ]
        }
    ]
            
    return (
        <div className='mt-8'>
            <h2 className='text-white capitalize text-3xl font-bold text-center'>best gym facilities in your area.</h2>
            <div className="md:grid grid-cols-3 mt-8">
                {
                    gymPricingOptions.map(priceOption => <Price key={priceOption.price_id} priceOption={priceOption}></Price>)
                }
            </div>
        </div>
    );
};

export default PriceOption;