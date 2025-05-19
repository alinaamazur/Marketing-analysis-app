import React from 'react';
import '../../WelcomePage/MainContent/MainContent.css';
import '../Examples.css';
import { Link } from 'react-router-dom';

const CallToAction = () => (
    <div className='Call-to-action'>
        <div className='Call-to-action-question'>
            <h2>The result?</h2>
        </div>
        <div className='Call-to-action-text'>
            <h2><span className='Red-text'>Smarter </span> decisions.
                <span className='Red-text'> Faster </span> growth.
                <span className='Red-text'> More </span> impact.</h2>
        </div>
        <Link to='/log-in'>
            <button className='Left-content-button'>Start Now</button>
        </Link>
    </div>
)

export default CallToAction;