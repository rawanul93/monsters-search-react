import React from 'react';
import './SearchBox.style.css';

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input className='search' type='search' placeholder={placeholder} onChange={e => handleChange(e)}/>
    )
  
}