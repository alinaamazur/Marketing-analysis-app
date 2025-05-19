import React from 'react';
import AccountStatistics from './OffersItems/AccountStatistics';
import CompetitorTracking from './OffersItems/CompetitorTracking';
import ABTesting from './OffersItems/ABTesting';
import ReportGeneration from './OffersItems/ReportGeneration';
import SentimentAnalysis from './OffersItems/SentimentAnalysis';
import Bubble from './OffersIMG/Bubble.png'
import './Offers.css';

const Offers = () => (
    <div className='Offers'>
        <img className='First-bubble Bubble' src={Bubble} alt='Bubble'></img>
        <h2 className='Offers-header'>We help you understand what your audience <span className='Blue-text'>really wants</span></h2>
        <div className='Offers-items'>
            <AccountStatistics />
            <CompetitorTracking />
            <ABTesting />
            <ReportGeneration />
            <SentimentAnalysis />
        </div>
    </div>
)

export default Offers;