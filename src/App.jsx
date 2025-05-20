import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components/WelcomePage/Header/Header.css';
import './Components/WelcomePage/MainContent/MainContent.css';
import './Components/WelcomePage/WelcomePage.css';

import WelcomePage from './Components/WelcomePage/WelcomePage';
import Offers from './Components/Offers/Offers';
import Examples from './Components/Examples/Examples';
import Footer from './Components/Footer/Footer';

import LogInPage from './Components/Pages/LogInPage/LogIn';
import SignUpPage from './Components/Pages/RegisterPage/RegisterPage'

const MainPage = () => (
  <div>
    <WelcomePage />
    <Offers />
    <Examples />
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
