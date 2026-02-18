import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider.jsx';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg';

function Explore() {
  const [count, setCount] = useState( 0 );

  const handleClick = useCallback((event) => {
    console.log('Toiminto(X,Y): (' + event.pageX + ', ' + event.pageY + ')');
    setCount((count) => count + 1);
  }, []);


  useEffect(() => {  
    console.log('Viesti useEfect funktiosta');
  }, []);

  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        <Slider />

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
