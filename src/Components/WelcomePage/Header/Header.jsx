import React from 'react';
import './Header.css';
import LeftHeader from './HeaderItems/LeftHeader';
import CentralHeader from './HeaderItems/CentralHeader';
import RightHeader from './HeaderItems/RightHeader';

const Header = () => (
    <header className='App-header'>
        <LeftHeader />
        <CentralHeader />
        <RightHeader />
    </header>
)

export default Header;