import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import { ReactComponent as Hamburger } from '../assets/shared/icon-hamburger.svg';
import { ReactComponent as Close } from '../assets/shared/icon-close.svg';
import '../sass/components/_nav.scss';
import useWindowSize from '../hooks/useWindowSize';
import useToggler from '../hooks/useToggler';

function Nav() {
  const { width: windowWidth } = useWindowSize();
  const [isNavOpen, setIsNavOpen] = useToggler(false);

  function ListItem({ path, text }) {
    return (
      <li onClick={setIsNavOpen}>
        <NavLink to={`${path}`}>{text}</NavLink>
      </li>
    );
  }
  return (
    <nav>
      <Link to='/'>
        <div className='logo'>
          <Logo />
        </div>
      </Link>
      <hr />
      <ul className={`nav-links ${isNavOpen ? 'active' : ''} `}>
        <ListItem path='/' text='Home' />
        <ListItem path='/destination' text='Destination' />
        <ListItem path='/crew' text='crew' />
        <ListItem path='/technology' text='technology' />
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
