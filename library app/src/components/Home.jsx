import React from 'react'
import libraryImage from '../assets/library image.avif'

const Home = () => {
  console.log('Home component rendered');
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to the Library</h1>
      <img src={libraryImage} alt="Library" className="img-fluid" />
    </div>
  );
};

export default Home;
