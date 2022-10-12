import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Alldata = ({detail}) => {
  console.log(detail);
  const {question, options, correctAnswer} = detail;
  return (
    <div className='bg-primary text-light container mt-5 rounded p-3 '>

      <div className='d-flex justify-content-between '>

      <h1>{question} </h1>

      <div  style={{width:'40px'}}> 
      <EyeIcon>{correctAnswer}</EyeIcon>
      
        </div>
      
      </div>
      <div>
        
        {options.map((option, index) => <p key={index}><input type="checkbox" name="" id="" />{option}</p>)}
      </div>
    </div>
  );
};

export default Alldata;