import React from 'react';
import '../MainContent.css';
import welcomePageImg from './welcomePageImg.png'

const RightContent = () => (
    <div className='Right-content'>
        <img src={welcomePageImg} alt='Welcome Page Image' className='Welcome-page-img'></img>
    </div>
)

export default RightContent;