import React from 'react';
import '../Header.css';
import logo from '../HeaderIMG/logo.png';

const LeftHeader = () => (
    <div className='Left-header'>
        <img src={logo} alt='Logo' className='logo'></img>
    </div>
)

export default LeftHeader;