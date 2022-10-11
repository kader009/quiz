import React from 'react';

const Alldata = ({detail}) => {
  const {question, option} = detail;
  return (
    <div className='d-flex'>
      <div>

      <h1>{question}</h1>
      <p>{option}</p>
      </div>
    </div>
  );
};

export default Alldata;