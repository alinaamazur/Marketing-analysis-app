import React from 'react';
import ExamplesPhotos from './ExamplesItems/ExamplesPhotos';
import CallToAction from './ExamplesItems/CallToActiion';
import './Examples.css';

const Examples = () => (
    <div className='Examples'>
        <div className='Blue-background'>
            <div className='Examples-header-text'>
                <h2 className='Examples-main-header'>
                    <span className='Blue-text'>LIKELY </span>
                    is your all-in-one social media intelligence platform
                </h2>
                <p className='Example-text'>
                    We connect to your favourite platforms — like Instagram, Facebook, YouTube
                    — and analyse everything from user engagement to competitor performance.
                </p>
            </div>
            <ExamplesPhotos />
            <CallToAction />
        </div>
    </div>
)

export default Examples;