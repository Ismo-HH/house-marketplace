import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import offerIcon from '../assets/svg/localOfferIcon.svg';
import exploreIcon from '../assets/svg/exploreIcon.svg';
import personOutlineIcon from '../assets/svg/personOutlineIcon.svg';

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <img src={exploreIcon}
              fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/offers')}>
            <img src={offerIcon}
              fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/offer')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offers
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/profile')}>
            <img src={personOutlineIcon}
              fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
