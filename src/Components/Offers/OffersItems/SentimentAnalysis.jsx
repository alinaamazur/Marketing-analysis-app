import React from "react";
import SentimentAnalysisImg from '../OffersIMG/SentimentAnalysis.png';
import Bubble from '../OffersIMG/Bubble.png'
import { Link } from "react-router-dom";

const SentimentAnalysis = () => (
    <div className='Offers-section'>
        <div className='Offers-section-content'>
            <h3 className='Offers-section-header Blue-text'>Sentiment Analysis</h3>
            <p className='Offers-section-text'>
                Go beyond numbers and understand the emotions behind the feedback.
                With advanced NLP-powered Sentiment Analysis, you can scan and interpret large
                volumes of user-generated content — including product reviews, social media posts,
                support tickets, and surveys — to detect tone, intent, and satisfaction. Identify
                emerging trends, track public perception over time, and quickly respond to shifts
                in customer sentiment.
            </p>
            <Link to='/log-in'>
                <button className='Offers-section-button'>GET STARTED</button>
            </Link>
        </div>
        <div className='Sentiment-analysis-img-wrapper'>
            <img src={SentimentAnalysisImg} alt='Sentiment Analysis Image' className='Sentiment-analysis-img' />
        </div>
        <img className='Seventh-bubble Bubble' src={Bubble} alt='Bubble'></img>
    </div>
);

export default SentimentAnalysis;
