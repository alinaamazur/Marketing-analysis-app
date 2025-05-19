import React from "react";
import ABTestingImg from '../OffersIMG/ABTesting.png';
import Bubble from '../OffersIMG/Bubble.png'
import { Link } from "react-router-dom";

const ABTesting = () => (
    <div className='Offers-section'>
        <div className='Offers-section-content'>
            <h3 className='Offers-section-header Blue-text'>A/B Testing</h3>
            <p className='Offers-section-text'>
                Unlock the full potential of experimentation with a robust A/B Testing
                engine designed for marketers, product teams, and growth professionals.
                Measure statistically significant differences in user behavior, conversion rates,
                and engagement metrics. Use these insights to validate ideas, reduce guesswork, and
                implement only the strategies that are proven to drive real results.
            </p>
            <Link to='/log-in'>
                <button className='Offers-section-button'>GET STARTED</button>
            </Link>
        </div>
        <div className='A-B-testing-img-wrapper'>
            <img src={ABTestingImg} alt='A/B Testing Image' className='A-B-testing-img' />
        </div>
        <img className='Fifth-bubble Bubble' src={Bubble} alt='Bubble'></img>
    </div>
);

export default ABTesting;
