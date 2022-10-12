import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';

const Alldata = ({detail}) => {
  const {question, options, correctAnswer} = detail;
  return (
    <div className='bg-primary text-light container mt-5 rounded p-3 '>
      <div className='d-flex justify-content-between '>
        <div className='text-center'>

      <h1 className='fs-6' style={{marginLeft:'300px', marginBottom:'10px'}}>{question} </h1>
        </div>
      <div  style={{width:'20px'}}> 
      <EyeIcon></EyeIcon>
      
        </div>
      
      </div>
      <div>
        
        {options.map((option, index) => <Option key={index} correctAnswer={correctAnswer} option={option}></Option>)}

      </div>
    </div>
  );
};

export default Alldata;