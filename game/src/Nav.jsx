import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='box'>
        <div className='name'>
            <h2>Rock</h2>
            <h2>Paper</h2>
            <h2>Scissors</h2>
        </div>
        <div className='score'>
            <div className='res'>
                <h6>Score</h6>
                <h1 className='num'>12</h1>
            </div>
        </div>
    </div>
  )
}

export default Nav