// src/components/Homepage.js
import React from 'react';
import Header from './Header';
import Login from './login';
import './Homepage.css'
import Footer from './Footer';
import Featuredarticles from './Featuredarticles';
import FeaturedTutorials from './FeaturedTutorials';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='img'>
        <img src="https://augstudy.com/aug-website-files/wp-content/uploads/2018/01/institutions/deakin_university_740x400.jpg" alt="deakin" />
      </div>
      <div className="ui container">

 
        <Featuredarticles />
        <FeaturedTutorials />
        <Header/>
        <Login/>
       
        <Footer/>
         
      </div>
    </div>
  );
};

export default Homepage;