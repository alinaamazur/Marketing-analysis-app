import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';
import arrow from '../HeaderIMG/arrow.png';

const CentralHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectToolOption = (toolOption) => {
        setSelectedOption(toolOption);
        setIsOpen(false);
    };

    return (
        <div className='Central-header'>
            <div className='Header-arrow' onClick={toggleDropdown}>
                <p>Tools</p>
                <img src={arrow} alt='arrow' className={`Arrow ${isOpen ? 'Open' : ''}`} />
                {isOpen && (
                    <div className='Tool-options-dropdown'>
                        <Link
                            to="/log-in"
                            className={`Dropdown-tool-item-wrap ${selectedOption === 'Account Statistics' ? 'Active' : ''}`}
                            onClick={() => handleSelectToolOption('Account Statistics')}
                        >
                            <div className='Dropdown-tool-item'>
                                <h3 className='Dropdown-tool-item-header Blue-text'>Account Statistics</h3>
                                <p className='Dropdown-tool-item-text'>Track user behavior and key metrics in real time</p>
                            </div>
                        </Link>

                        <Link
                            to="/log-in"
                            className={`Dropdown-tool-item-wrap ${selectedOption === 'Competitor Tracking' ? 'Active' : ''}`}
                            onClick={() => handleSelectToolOption('Competitor Tracking')}
                        >
                            <div className='Dropdown-tool-item'>
                                <h3 className='Dropdown-tool-item-header Blue-text'>Competitor Tracking</h3>
                                <p className='Dropdown-tool-item-text'>Monitor strategies, pricing campaigns of your competitors</p>
                            </div>
                        </Link>

                        <Link
                            to="/log-in"
                            className={`Dropdown-tool-item-wrap ${selectedOption === 'A/B Testing' ? 'Active' : ''}`}
                            onClick={() => handleSelectToolOption('A/B Testing')}
                        >
                            <div className='Dropdown-tool-item'>
                                <h3 className='Dropdown-tool-item-header Blue-text'>A/B Testing Tool</h3>
                                <p className='Dropdown-tool-item-text'>Compare versions of content to see what performs best</p>
                            </div>
                        </Link>

                        <Link
                            to="/log-in"
                            className={`Dropdown-tool-item-wrap ${selectedOption === 'Report Generation' ? 'Active' : ''}`}
                            onClick={() => handleSelectToolOption('Report Generation')}
                        >
                            <div className='Dropdown-tool-item'>
                                <h3 className='Dropdown-tool-item-header Blue-text'>Report Generation</h3>
                                <p className='Dropdown-tool-item-text'>Automatically create reports to measure performance</p>
                            </div>
                        </Link>

                        <Link
                            to="/log-in"
                            className={`Dropdown-tool-item-wrap ${selectedOption === 'Sentiment Analysis' ? 'Active' : ''}`}
                            onClick={() => handleSelectToolOption('Sentiment Analysis')}
                        >
                            <div className='Dropdown-tool-item'>
                                <h3 className='Dropdown-tool-item-header Blue-text'>Sentiment Analysis</h3>
                                <p className='Dropdown-tool-item-text'>Analyze feedback to understand public sentiment</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
            <Link to='/blog' className='Header-item'>Blog</Link>
            <Link to='/FAQ' className='Header-item'>FAQ</Link>
        </div>
    );
};

export default CentralHeader;
