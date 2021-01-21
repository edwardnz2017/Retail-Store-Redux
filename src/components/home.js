import React from 'react';
import '../css/home.css';
import homePhoto from '../misc/home-photo.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <Link to='/shop' style={{ textDecoration: 'none' }}>
        <div id='desc-box'>Shop Now</div>
      </Link>

      <img id='home-photo' src={homePhoto} alt='' />
    </main>
  );
};

export default Home;
