import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-fluid">

    <header className='d-flex justify-content-between  bg-dark text-light p-3 '>
      <div className='fw-bold text-warning'>Quizzly Beers</div>
      <nav >
        <Link  to='/home'>Home</Link>
        <Link  to='/rechart'>Recharts</Link>
        <Link  to='/question'>Question</Link>
      </nav>
    </header>
    
    </div>
  );
};

export default Header;