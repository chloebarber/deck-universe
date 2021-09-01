
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import DemoLogin from '../auth/DemoLogin';
import { useSelector } from 'react-redux';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector((state) => state.session.user)

  return (
    <div className="navbar-container">
          <NavLink to='/' exact={true} activeClassName='active'>Home</NavLink>
          <NavLink to='/decks' exact={true} activeClassName='active'>Browse Decks</NavLink>
          {!user && <NavLink to='/login' exact={true} activeClassName='active'>Login</NavLink>}
          {user && <NavLink to='/my-games' exact={true} activeClassName='active'>My Games</NavLink>}
          {user && <NavLink to='/decks/new' exact={true} activeClassName='active'>Create New Deck</NavLink>}
          {!user && <NavLink to='/sign-up' exact={true} activeClassName='active'>Sign Up</NavLink>}
          <NavLink to='/users' exact={true} activeClassName='active'>Users</NavLink>
          {!user && <DemoLogin />}
          {user && <LogoutButton />}
    </div>
  );
}

export default NavBar;
