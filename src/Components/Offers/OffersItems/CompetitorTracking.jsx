import React from "react";
import CompetitorTrackingImg from '../OffersIMG/CompetitorTracking.png';
import Bubble from '../OffersIMG/Bubble.png'
import { Link } from "react-router-dom";

const CompetitorTracking = () => (
    <div className='Offers-section'>
        <div className='Competitor-tracking-img-wrapper'>
            <img src={CompetitorTrackingImg} alt='Competitor Tracking Image' className='Competitor-tracking-img' />
        </div>
        <img className='Third-bubble Bubble' src={Bubble} alt='Bubble'></img>
        <div className='Offers-section-content'>
            <img className='Fourth-bubble Bubble' src={Bubble} alt='Bubble'></img>
            <h3 className='Offers-section-header Blue-text'>Competitor Tracking</h3>
            <p className='Offers-section-text'>
                Understand your market landscape like never before.
                Competitor Tracking allows you to monitor your key rivals across multiple
                digital touchpoints — websites, ad campaigns, content updates, SEO performance,
                pricing changes, and more. With automated benchmarking
                and trend analysis, you can anticipate moves, spot gaps in the market, and
                confidently refine your positioning and strategy to maintain a competitive edge.
            </p>
            <Link to='/log-in'>
                <button className='Offers-section-button'>GET STARTED</button>
            </Link>
        </div>
    </div>
);

export default CompetitorTracking;
