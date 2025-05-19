import React from 'react';
import './MainContent.css';
import LeftContent from './MainContentItems/LeftContent';
import RightContent from './MainContentItems/RightContent';

const MainContent = () => (
    <div className='Welcome-page-main-content'>
        <LeftContent />
        <RightContent />
    </div>
)

export default MainContent;