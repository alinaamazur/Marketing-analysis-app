import React, { useState } from 'react';
import '../Header.css';
import arrow from '../HeaderIMG/arrow.png';
import { Link } from 'react-router-dom';

const RightHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('EN');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <div className='Right-header'>
            <Link to='/log-in'>
                <button className='Header-item Log-in-text'>Log in</button>
            </Link>
            <Link to='/sign-up' className='Register-text'>
                <p className='Header-item'>Register</p>
            </Link>

            <div className='Header-arrow' onClick={toggleDropdown}>
                <p className='Language Active'>{selectedLang}</p>
                <img src={arrow} alt='arrow' className={`Arrow ${isOpen ? 'Open' : ''}`} />

                {isOpen && (
                    <div className='Language-dropdown'>
                        <div
                            className={`Dropdown-item ${selectedLang === 'EN' ? 'Active' : ''}`}
                            onClick={() => selectLanguage('EN')}
                        >
                            EN
                        </div>
                        <div
                            className={`Dropdown-item ${selectedLang === 'PL' ? 'Active' : ''}`}
                            onClick={() => selectLanguage('PL')}
                        >
                            PL
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default RightHeader;
