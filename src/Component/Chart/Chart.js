import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Chart = () => {
    const data = [
        {
          name: 'react', uv: 4000, ex: 7000, amt: 2400,
        },
        {
          name: 'JavaScript', uv: 3000, ex: 5209, amt: 2210,
        },
        {
          name: 'Html', uv: 2000, ex: 9800, amt: 2290,
        },
        {
          name: 'CSS', uv: 2780, ex: 8100, amt: 2000,
        },
        {
          name: 'bootstr', uv: 1890, ex: 4800, amt: 2181,
        },
        {
          name: 'firebase', uv: 2390, ex: 7500, amt: 2500,
        },
        {
          name: 'Node.js', uv: 3490, ex: 2500, amt: 2100,
        },
      ];
      
    return (
      
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
       
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ex" fill="green" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    );
};

export default Chart;