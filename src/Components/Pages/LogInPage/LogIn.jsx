import React from 'react';
import logo from '../../WelcomePage/Header/HeaderIMG/logo.png';
import '../../WelcomePage/Header/Header.css';
import './LogIn.css';
import facebookIcon from './LogInPageImg/FacebookIcon.png';
import googleIcon from './LogInPageImg/GoogleIcon.png';
import { Link } from 'react-router-dom';

const LogInPage = () => (
    <div className='Log-in-page'>
        <header className='Log-in-page-header'>
            <img src={logo} alt="Logo" className='logo' />
            <div className='Log-in-header-text-section'>
                <p className='Log-in-header-text'>Don't have an account?</p>
                <button className='Log-in-header-button'>
                    <Link to="/sign-up" className='Sign-up-button Blue-text'>Sign up</Link>
                </button>
            </div>
        </header>
        <div className='Log-in-main-section'>
            <h2>Log in</h2>
            <div className='Log-in-inputs'>
                <input type='email' className='Log-in-input' placeholder='E-mail' />
                <input type='password' className='Log-in-input' placeholder='Password' />
            </div>
            <button className='Log-in-button'>Log in</button>
            <div className='Divider-section'><div className='Divider'></div> or <div className='Divider'></div></div>
            <div className='Log-in-inputs'>
                <button className='Facebook-log-in Social-media-input Blue-text'>
                    <img src={facebookIcon} className='Social-icon' />
                    Log in with Facebook
                </button>
                <button className='Google-log-in Social-media-input'>
                    <img src={googleIcon} className='Social-icon Social-icon-google' />
                    Log in with Google
                </button>
            </div>
            <button className='Log-in-header-button Forgot-password-text Blue-text'>Forgot password?</button>
        </div>
    </div>
)

export default LogInPage;