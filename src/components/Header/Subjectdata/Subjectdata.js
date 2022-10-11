import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Subjectdata = () => {
  const Subdata = useLoaderData()
  const {questions} = Subdata
  console.log(Subdata.data);
  return (
    <div>
      <h1>this is all subject data:{Subdata.questions}</h1>
    </div>
  );
};

export default Subjectdata;