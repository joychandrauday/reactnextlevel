import React from 'react';
import { LineChart , Line,XAxis,YAxis } from 'recharts';

const Linechart = () => {
    const studentMarksData = [
        { "id": 1, "student": "John", "math": 85, "physics": 78, "chemistry": 80 },
        { "id": 2, "student": "Alice", "math": 78, "physics": 82, "chemistry": 75 },
        { "id": 3, "student": "Michael", "math": 92, "physics": 88, "chemistry": 85 },
        { "id": 4, "student": "Emily", "math": 65, "physics": 70, "chemistry": 72 },
        { "id": 5, "student": "David", "math": 70, "physics": 75, "chemistry": 68 },
        { "id": 6, "student": "Sophia", "math": 88, "physics": 90, "chemistry": 92 },
        { "id": 7, "student": "Daniel", "math": 82, "physics": 85, "chemistry": 80 },
        { "id": 8, "student": "Emma", "math": 90, "physics": 92, "chemistry": 88 },
        { "id": 9, "student": "Matthew", "math": 75, "physics": 80, "chemistry": 78 },
        { "id": 10, "student": "Olivia", "math": 79, "physics": 75, "chemistry": 72 }
      ];
      
      
    return (
        <div>
            <h1 className='my-8 capitalize text-2xl font-bold'>LineChart exploration</h1>
            <LineChart width={1000} height={400} data={studentMarksData}>
                <XAxis dataKey="student"></XAxis>
                <YAxis dataKey=""></YAxis>
                <Line dataKey="math" stroke='#FFFF00'></Line>
                <Line dataKey="physics" stroke='#FF0000'></Line>
                <Line dataKey="chemistry" stroke='#0000FF'></Line>
            </LineChart>
            {/* <BarChart data={data} width={400} height={300}>
                <Bar stackId="pv" dataKey="pv01" />
                <Bar stackId="pv" dataKey="pv02" />
                <Bar stackId="uv" dataKey="uv01" />
                <Bar stackId="uv" dataKey="uv02" />
            </BarChart> */}
        </div>
    );
};

export default Linechart;