import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = () => {
    const soldItemsData = [
        { "category": "Electronics", "sold": 120 },
        { "category": "Clothing", "sold": 220 },
        { "category": "Books", "sold": 90 },
        { "category": "Home Appliances", "sold": 150 },
        { "category": "Toys", "sold": 80 },
        { "category": "Sports Equipment", "sold": 110 },
        { "category": "Beauty Products", "sold": 130 },
        { "category": "Furniture", "sold": 100 },
        { "category": "Jewelry", "sold": 70 },
        { "category": "Kitchenware", "sold": 85 }
    ];
    return (
        <div>
            <h1 className='mt-32 capitalize text-2xl font-bold'>LineChart exploration</h1>
                <BarChart width={1250} height={440} data={soldItemsData}>
                    <XAxis dataKey="category"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                    <Bar dataKey="sold" fill="#8884d8" />
                </BarChart>
        </div>
    );
};


export default Barchart;