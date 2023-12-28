import React from 'react';
import HeaderBar from './components/HeaderBar';
import MainNewsFeed from './components/MainNewsFeed';
import SectionsAndCategories from './components/SectionsAndCategories';

function App() {
  return (
    <div className="app">
      <HeaderBar />
      <MainNewsFeed />
      <SectionsAndCategories />
    </div>
  );
}

export default App;