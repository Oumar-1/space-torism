import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import '../sass/components/_nav.scss';

function Nav(props) {
  return (
    <nav>
      <div className='logo'>
        <Logo />
      </div>
      <hr />
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/destination'>Destination </Link>
        </li>
        <li>
          <Link to='/crew'>crew </Link>
        </li>
        <li>
          <Link to='/technology'>technology</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
