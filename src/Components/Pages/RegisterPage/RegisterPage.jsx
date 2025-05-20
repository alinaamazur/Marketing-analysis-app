import React from 'react';
import logo from '../../WelcomePage/Header/HeaderIMG/logo.png';
import '../../WelcomePage/Header/Header.css';
import '../LogInPage/LogIn.css';
import './RegisterPage.css';
import facebookIcon from '../LogInPage/LogInPageImg/FacebookIcon.png';
import googleIcon from '../LogInPage/LogInPageImg/GoogleIcon.png';
import { Link } from 'react-router-dom';

const RegisterPage = () => (
    <div className='Log-in-page'>
        <header className='Log-in-page-header'>
            <img src={logo} alt="Logo" className='logo' />
            <div className='Log-in-header-text-section'>
                <p className='Log-in-header-text'>Have an account?</p>
                <button className='Log-in-header-button'>
                    <Link to="/log-in" className='Sign-up-button Blue-text'>Sign in</Link>
                </button>
            </div>
        </header>
        <div className='Log-in-main-section'>
            <h2>Create your account</h2>
            <div className='Log-in-inputs'>
                <input type='text' className='Log-in-input' placeholder='First name' />
                <input type='email' className='Log-in-input' placeholder='E-mail' />
                <input type='password' className='Log-in-input' placeholder='Password' />
            </div>
            <button className='Log-in-button'>Sign up</button>
            <div className='Divider-section'><div className='Divider'></div> or <div className='Divider'></div></div>
            <div className='Log-in-inputs'>
                <button className='Facebook-log-in Social-media-input Blue-text'>
                    <img src={facebookIcon} className='Social-icon' />
                    Sigh up with Facebook
                </button>
                <button className='Google-log-in Social-media-input'>
                    <img src={googleIcon} className='Social-icon Social-icon-google' />
                    Sigh up with Google
                </button>
            </div>
            <p className='Terms-of-use'>
                By signing up, I agree to the <span className='Blue-text Agreement-button'>Terms of Use </span>
                and the <span className='Blue-text Agreement-button'>Privacy Policy</span>
            </p>
        </div>
    </div>
)

export default RegisterPage;