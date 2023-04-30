import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function Scroll() {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg width="35px" viewBox="0 0 14.334 24.75">
        <circle
          className="circle-1"
          fill={mode === 'dark' ? 'white' : 'black'}
          cx="7.167"
          cy="6"
          r="1.2"
        />
        <circle
          className="circle-2"
          fill={mode === 'dark' ? 'white' : 'black'}
          cx="7.167"
          cy="6"
          r="1.2"
        />
        <path
          stroke={mode === 'dark' ? 'white' : 'black'}
          fill="transparent"
          d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z"
        />
      </svg>
    </div>
  );
}

export default Scroll;
