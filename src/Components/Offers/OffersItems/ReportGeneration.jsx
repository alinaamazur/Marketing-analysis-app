import React from "react";
import ReportGenerationImg from '../OffersIMG/ReportGeneration.png';
import Bubble from '../OffersIMG/Bubble.png'
import { Link } from "react-router-dom";

const ReportGeneration = () => (
    <div className='Offers-section'>
        <div className='Report-generation-img-wrapper'>
            <img src={ReportGenerationImg} alt='Report Generation Image' className='Report-generation-img' />
        </div>
        <img className='Sixth-bubble Bubble' src={Bubble} alt='Bubble'></img>
        <div className='Offers-section-content'>
            <h3 className='Offers-section-header Blue-text'>Report Generation</h3>
            <p className='Offers-section-text'>
                Turn raw data into polished, professional-grade reports in minutes —
                no spreadsheets required. Report Generation lets you compile and visualize
                your key performance indicators across marketing, sales, product, and user
                experience in fully customizable dashboards and PDF reports. Schedule automated
                reports for your team, investors, or stakeholders, and deliver clarity with visual
                charts, clear narratives, and actionable takeaways.
            </p>
            <Link to='/log-in'>
                <button className='Offers-section-button'>GET STARTED</button>
            </Link>
        </div>
    </div>
);

export default ReportGeneration;
