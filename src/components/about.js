import React from 'react';
import '../css/about.css';
import facebook from '../misc/fb-icon.png';
import instagram from '../misc/ig-icon.png';
import twitter from '../misc/twi-icon.png';
import line from '../misc/line-icon.png';

const About = () => {
  return (
    <main>
      <div id='about-box'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
          egestas diam in arcu.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi
          tincidunt augue interdum velit euismod in pellentesque. Congue eu
          consequat ac felis donec et odio pellentesque diam. Sit amet risus
          nullam eget felis eget nunc lobortis mattis. Consectetur adipiscing
          elit ut aliquam purus. At erat pellentesque adipiscing commodo elit at
          imperdiet dui. Vestibulum sed arcu non odio euismod lacinia at. Eget
          arcu dictum varius duis. Mollis aliquam ut porttitor leo a. Id aliquet
          risus feugiat in ante metus dictum at. Nam libero justo laoreet sit
          amet cursus. Dapibus ultrices in iaculis nunc. At ultrices mi tempus
          imperdiet nulla. Ac tincidunt vitae semper quis. Fringilla phasellus
          faucibus scelerisque eleifend.
        </p>
        <div id='icon-box'>
          <a href='https://www.facebook.com'>
            <img src={facebook} alt='facebook icon' />
          </a>
          <a href='https://www.instagram.com'>
            <img src={instagram} alt='instagram icon' />
          </a>
          <a href='https://www.twitter.com'>
            <img src={twitter} alt='twitter icon' />
          </a>
          <a href='https://line.me/ja/'>
            <img src={line} alt='line icon' />
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
