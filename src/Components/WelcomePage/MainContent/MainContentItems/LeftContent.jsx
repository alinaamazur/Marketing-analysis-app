import React from 'react';
import '../MainContent.css';
import { Link } from 'react-router-dom';

const LeftContent = () => (
    <div className='Left-content'>
        <h2 className='Left-content-header'><span className='Blue-text'>Make Smarter</span> Marketing Moves with Social Data</h2>
        <p className='Left-content-text'>
            Turn likes, comments and shares into powerful insights.
            Track your brand, analyze competitors and discover what actually works — <span className='Blue-text'>all in one place</span>.
        </p>
        <Link to='/log-in'>
            <button className='Left-content-button'>Start Now</button>
        </Link>
    </div>
)

export default LeftContent;