import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Show from '../Show/Show';

const Home = () => {
  const Subjects = useLoaderData()
  // console.log(Subjects.data);
  return (
    <div className='container-fluid '>

      
      <div >

      <img style={{width:'100%', height: '300px'}} src="image/header.jpg" alt="" />
      
    </div>

    
    <div>

      {
        Subjects.data.map(subject => <Show key={subject.id} subject={subject}></Show>)
      }
    </div>

    </div>

    
  );
};

export default Home;