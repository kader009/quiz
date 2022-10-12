import React from 'react';
import { Link } from 'react-router-dom';
import './Show.css'

const Show = ({quiz}) => {
  const {name, logo, id} = quiz;
  return (
    <div className='float-end mt-4 me-5 mb-5'>

      <div className="card bg-dark" style={{width: '20rem'}}>
      <div className="card-body">
      <figure>
    <img className='img-fluid' src={logo} alt="logo" />
    </figure>
    
    <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
    <button href="#" className="btn btn-primary fw-bold"><Link className='text-light text-decoration-none' to={`/quiz/${id}`}>Learn More</Link></button>
  </div>
</div>
      
    </div>
  );
};

export default Show;