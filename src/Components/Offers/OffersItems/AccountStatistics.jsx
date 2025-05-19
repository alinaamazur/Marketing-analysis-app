import React from "react";
import AccountStatisticsImg from '../OffersIMG/AccountStatistics.png';
import Bubble from '../OffersIMG/Bubble.png'
import './../Offers.css'
import { Link } from "react-router-dom";

const AccountStatistics = () => (
    <div className='Offers-section'>
        <div className='Offers-section-content'>
            <img className='Second-bubble Bubble' src={Bubble} alt='Bubble'></img>
            <h3 className='Offers-section-header Blue-text'>Account Statistics</h3>
            <p className='Offers-section-text'>
                Track and analyze every meaningful interaction your users have with
                your platform through powerful, real-time account-level analytics.
                These insights empower you to segment your audience, identify power users,
                uncover bottlenecks, and drive personalization at scale. Whether you're optimizing
                onboarding flows or tracking customer health, Account Statistics delivers the
                granular data you need to make impactful, user-centered decisions.
            </p>
            <Link to='/log-in'>
                <button className='Offers-section-button'>GET STARTED</button>
            </Link>
        </div>
        <div className='Account-statistics-img-wrapper'>
            <img src={AccountStatisticsImg} alt='Account Statistics Image' className='Account-statistics-img' />
        </div>
    </div>
);

export default AccountStatistics;
