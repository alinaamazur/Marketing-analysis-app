import React from 'react';
import Examples from '../ExamplesIMG/PhotoSlider.png'
import '../Examples.css';

const ExamplesPhotos = () => (
    <div className='Examples-photos'>
        <div className='Examples-slider'>
            <button className='Slider-arrow Left'>&#8592;</button>
            <div className='Examples-photo-wrapper'>
                <img className='Examples-photo_slider' src={Examples} alt='Examples'></img>
            </div>
            <button class='Slider-arrow Right'>&#8594;</button>
        </div>
        <div className='Slider-dots'>
            <span className='Dot active'></span>
            <span className='Dot'></span>
            <span className='Dot'></span>
        </div>
    </div>
)

export default ExamplesPhotos;