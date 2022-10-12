import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Alldata from '../Alldata/Alldata';

const Subjectdata = () => {
  const Subdata = useLoaderData()
  const name = Subdata.data.name;
  const quizdata = Subdata.data.questions;
  
  return (
    <div>
      <h1 className='text-warning mt-4'>This quiz of: {name}</h1>
    <div>

      {
        quizdata.map(detail => <Alldata key={detail.id} detail={detail}></Alldata>)
      }
      </div>
      </div>
  );
};

export default Subjectdata;