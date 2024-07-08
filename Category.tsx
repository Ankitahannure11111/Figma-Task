import React, { useState } from 'react';
import '../../src/Components/Category';
import girlwithdog from '../images/girlwithdog.png'
import doctor from '../images/doctor.png'
import girlwithdog2 from '../images/girlwithdog2.png'
import boywithdog from '../images/boywithdog.png'


const generateRandomPositions = (numImages: number) => {
  const positions = [];
  for (let i = 0; i < numImages; i++) {
    positions.push({
      top: `${Math.floor(Math.random() * 90)}%`,
      left: `${Math.floor(Math.random() * 90)}%`,
    });
  }
  return positions;
};

const Category: React.FC = () => {
  const numImages = 10; // Number of images to display
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const positions = generateRandomPositions(numImages);

  // Function to handle page navigation on click
  const handleClick = () => {
    setCurrentPage((prevPage) => (prevPage < 5 ? prevPage + 1 : 1)); // Cycle through pages 1 to 5
  };

  return (
    <div className="home-container" onClick={handleClick}>
      {currentPage === 1 && (
        <>
          <div className="categories-container">
      <h2>Categories</h2>
      <br/><br/>
      <div className="category">
        <h3>Pet Training</h3>
        <p>
          Pet training encompasses teaching animals essential
          behaviors and commands, fostering obedience and good
          manners. Training sessions focus on positive
          reinforcement techniques, such as rewards and praise.
        </p>
        <button className="get-started">Get Started</button>
        <br/><br/>
      </div>
      <div className="category-links">
       
          <button className="category-button">Pet Grooming</button>
        
        
          <button className="category-button">Pet Clinic</button>
        
        
          <button className="category-button">Pet Daycare</button>
        
        <button className="category-button active">Pet Training</button>
      </div>
      <img className='category-img' src={girlwithdog} alt="Girl with dog" />
    </div>
        </>
      )}
      {currentPage === 2 && (
        <div className="categories-container">
      
        <h2>Categories</h2><br/><br/>
        <div className="category">
          <h3>Pet Training</h3>
          
          <p>
            Pet training encompasses teaching animals essential<br/> behaviors and commands,
            fostering obedience and good <br/> manners. Training sessions focus on positive<br/>
            reinforcement techniques, such as rewards and praise.
          </p>
          <button className="get-started">Get Started</button><br/><br/>
        </div>
        <div className="category-links">
          <button className="category-button">Pet Grooming</button>
          <button className="category-button">Pet Clinic</button>
          <button className="category-button">Pet Daycare</button>
          <button className="category-button active">Pet Training</button>
        </div>
        <img className='category-img' src={doctor}/>
      </div>
      )}
      {currentPage === 3 && (
        <div className="categories-container">
      
        <h2>Categories</h2><br/><br/>
        <div className="category">
          <h3>Pet Training</h3>
          
          <p>
            Pet training encompasses teaching animals essential<br/> behaviors and commands,
            fostering obedience and good <br/> manners. Training sessions focus on positive<br/>
            reinforcement techniques, such as rewards and praise.
          </p>
          <button className="get-started">Get Started</button><br/><br/>
        </div>
        <div className="category-links">
          <button className="category-button">Pet Grooming</button>
          <button className="category-button">Pet Clinic</button>
          <button className="category-button">Pet Daycare</button>
          <button className="category-button active">Pet Training</button>
        </div>
        <img className='category-img' src={girlwithdog2}/>
      </div>
      )}
      {currentPage === 4 && (
         <div className="categories-container">
      
         <h2>Categories</h2><br/><br/>
         <div className="category">
           <h3>Pet Training</h3>
           
           <p>
             Pet training encompasses teaching animals essential<br/> behaviors and commands,
             fostering obedience and good <br/> manners. Training sessions focus on positive<br/>
             reinforcement techniques, such as rewards and praise.
           </p>
           <button className="get-started">Get Started</button><br/><br/>
         </div>
         <div className="category-links">
           <button className="category-button">Pet Grooming</button>
           <button className="category-button">Pet Clinic</button>
           <button className="category-button">Pet Daycare</button>
           <button className="category-button active">Pet Training</button>
         </div>
         <img className='category-img' src={boywithdog}/>
       </div>
      )}
     
    </div>
  );
};

export default Category;
