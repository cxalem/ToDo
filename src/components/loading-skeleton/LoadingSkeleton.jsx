import React from 'react';
import "./LoadingSkeleton.css"

const LoadingSkeleton = () => {
  return (
    <div className='skeleton-list'>
      <div className="skeleton-container">
          <div className="check-skeleton"></div>
          <div className="task-skeleton"></div>
      </div>
      <div className="skeleton-container">
          <div className="check-skeleton"></div>
          <div className="task-skeleton"></div>
      </div>
      <div className="skeleton-container">
          <div className="check-skeleton"></div>
          <div className="task-skeleton"></div>
      </div>
    </div>
  );
};

export { LoadingSkeleton };
