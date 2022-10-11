import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Alldata from '../Alldata/Alldata';

const Subjectdata = () => {
  const Subdata = useLoaderData()
  // const {questions} = Subdata
  console.log(Subdata.data.questions);
  return (
    <div>
      
      {
        Subdata.data.questions.map(detail => <Alldata key={detail.id} detail={detail}></Alldata>)
      }

    </div>
  );
};

export default Subjectdata;