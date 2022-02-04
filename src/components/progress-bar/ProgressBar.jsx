import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <>
        <div className='bar-container'>
            <div className="progress-bar"></div>
        </div>
        <p className="progress-number">25% completed</p>
    </>
  );
};

export { ProgressBar };
