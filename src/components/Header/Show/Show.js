import React from 'react';

const Show = ({subject}) => {
  console.log(subject);
  const {name, logo} = subject;
  return (
    <div className='mt-5 d-flex'>
      <div class="card" style={{width: '20rem'}}>
  <div class="card-body">
    <figure>

    <img className='img-fluid' src={logo} alt="logo" />
    </figure>
    
    <h6 class="card-subtitle mb-2 text-muted">{name}</h6>
    
    
    <a href="#" class="btn btn-primary fw-bold">Learn More</a>
  </div>
</div>
    </div>
  );
};

export default Show;