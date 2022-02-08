import React, { useContext } from 'react';
import './SearchButton.css';
import { ToDoContext } from '../to-do-context/ToDoContext';


const SearchButton = (props) => {
  return (
      <button className='search-button'>
          <img src="./src/public/lupa.svg" alt="" />
      </button>
  );
};

export { SearchButton };
