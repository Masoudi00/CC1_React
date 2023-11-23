// DarkMode.js
import React from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import { useDarkMode } from './DarkModeContext';
import './DarkMode.css';

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
