import React from 'react';
import '../styles/navBar.css'


function HeaderBar() {
  return (
    <div className="header-bar">
      {/* Google News Logo */}
      <div className="Title">News</div>
      
      {/* Navigation Options */}
      <div className="navigation">
        <span>World</span>
        <span>Tech</span>
        <span>Sports</span>
        <span>Finance </span>
        {/* Add more navigation options as needed */}
      </div>
    </div>
  );
}

export default HeaderBar;
