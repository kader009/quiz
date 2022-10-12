import React from 'react';

const Alldata = ({detail}) => {
  const {question, option} = detail;
  return (
    <div className='d-flex'>

      
      <div>

      <h1>{question}</h1>
      
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        {option}
      </div>
    </div>
  );
};

export default Alldata;