import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import { ReactComponent as Hamburger } from '../assets/shared/icon-hamburger.svg';
import { ReactComponent as Close } from '../assets/shared/icon-close.svg';
import '../sass/components/_nav.scss';
import useWindowSize from '../hooks/useWindowSize';
import useToggler from '../hooks/useToggler';

function Nav(props) {
  const { width: windowWidth } = useWindowSize();
  const [isNavOpen, setIsNavOpen] = useToggler(false);
  let delay = 0;
  const diff = 100;

  const style = () => ({ transitionDelay: (delay += diff) + 'ms' });
  return (
    <nav>
      <Link to='/'>
        <div className='logo'>
          <Logo />
        </div>
      </Link>
      <hr />
      <ul className={`nav-links ${isNavOpen ? 'active' : ''} `}>
        <li style={style()}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li style={style()}>
          <NavLink to='/destination'>Destination </NavLink>
        </li>
        <li style={style()}>
          <NavLink to='/crew'>crew </NavLink>
        </li>
        <li style={style()}>
          <NavLink to='/technology'>technology</NavLink>
        </li>
      </ul>
      {windowWidth < 411 && (
        <div className='menu-toggler' onClick={setIsNavOpen}>
          {isNavOpen ? <Close /> : <Hamburger />}
        </div>
      )}
    </nav>
  );
}

export default Nav;
