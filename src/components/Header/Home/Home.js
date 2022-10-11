import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Show from '../Show/Show';

const Home = () => {
  const Phones = useLoaderData()
  console.log(Phones.data);
  return (
    <div className='container-fluid '>

      
      <div className='position-relative'>
      <img  style={{width:'100%', height:'300px'}} src="image/header.jpg" alt="" />
      
    </div>
    
    
      {
        Phones.data.map(phone => <Show></Show>)
      }
    
    </div>
  );
};

export default Home;