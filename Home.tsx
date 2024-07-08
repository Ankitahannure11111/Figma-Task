import React, { useState } from 'react';
import '../../src/Home.css';
import h1 from '../../src/h1.png';

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

const Home: React.FC = () => {
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
          <img src={h1} alt="h1" className="random-background-image" />
          {positions.map((pos, index) => (
            <img key={index} src={h1} alt="h1" className="random-image" style={{ top: pos.top, left: pos.left }} />
          ))}
          <div>
            {/* Content for Homepage1 */}
            <h2>Homepage 1</h2>
            <p>Content for Homepage 1 goes here.</p>
          </div>
        </>
      )}
      {currentPage === 2 && (
        <div>
          {/* <img src={h1} alt="h1" className="random-background-image" /> */}
          {/* Content for Homepage2 */}
          <h2>Homepage 2</h2>
          <p>Content for Homepage 2 goes here.</p>
        </div>
      )}
      {currentPage === 3 && (
        <div>
          {/* <img src={h1} alt="h1" className="random-background-image" /> */}
          {/* Content for Homepage3 */}
          <h2>Homepage 3</h2>
          <p>Content for Homepage 3 goes here.</p>
        </div>
      )}
      {currentPage === 4 && (
        <div>
          {/* <img src={h1} alt="h1" className="random-background-image" /> */}
          {/* Content for Homepage4 */}
          <h2>Homepage 4</h2>
          <p>Content for Homepage 4 goes here.</p>
        </div>
      )}
      {currentPage === 5 && (
        <div>
          {/* <img src={h1} alt="h1" className="random-background-image" /> */}
          {/* Content for Homepage5 */}
          <h2>Homepage 5</h2>
          <p>Content for Homepage 5 goes here.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
