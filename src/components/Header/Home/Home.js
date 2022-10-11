import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Show from '../Show/Show';

const Home = () => {
  const Subjects = useLoaderData()
  console.log(Subjects.data);
  return (
    <div className='container-fluid '>

      
      <div className='position-relative'>
      <img  style={{width:'100%', height:'300px'}} src="image/header.jpg" alt="" />
      
    </div>

      {
        Subjects.data.map(subject => <Show key={subject.id} subject={subject}></Show>)
      }
    
    </div>
  );
};

export default Home;