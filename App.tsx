import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Headerrr';
import DataFetcher from './Components/DataFetcherr';
// import Category from './Components/category';
import './App.css';
import Category from './Components/Category';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/category' element={<Category />} />

      </Routes>
      <DataFetcher />
    </div>
  );
};

export default App;
