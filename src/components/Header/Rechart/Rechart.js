import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip,  } from 'recharts';


const Rechart = () => {
  const data = [
    {
      name: 'React',
      id: 1,
      total: 8,
    },
    {
      name: 'Javascript',
      id: 2,
      total: 9
    },
    {
      name: 'Css',
      id: 4,
      total: 8,
    },
    {
      name: 'Git',
      id: 5,
      total: 11 
    },
  ];
  return (
    <div>
      <h1 className='text-warning mt-4 fw-bold'>Rechart of data -</h1>

      <div className='ms-5 mt-5 mb-5'>
        <LineChart width={500} height={600} data={data}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Line type='monotone' dataKey='total' stroke='#8884d8'></Line>
        </LineChart>
      </div>
    </div>
  );
};

export default Rechart;