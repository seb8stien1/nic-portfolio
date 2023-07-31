// src/App.js
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage'
import ColourWheel from './pages/ColourWheel';
import AboutPage from './pages/AboutPage';
import RedPage from './pages/RedPage';
import BlackAndWhitePage from './pages/BlackAndWhitePage';
import GreenPage from './pages/GreenPage';
import OrangePage from './pages/OrangePage';
import BluePage from './pages/BluePage';
import BlackPage from './pages/BlackPage';
import PortraitPage from './pages/PortraitPage'
import ConcertPage from './pages/ConcertPage'
import LifestylePage from './pages/LifestylePage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/colour-wheel' element={<ColourWheel />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/red' element={<RedPage />} />
                <Route path='/white' element={<BlackAndWhitePage />} />
                <Route path='/green' element={<GreenPage />} />
                <Route path='/blue' element={<BluePage />} />
                <Route path='/orange' element={<OrangePage />} />
                <Route path='/black' element={<BlackPage />} />
                <Route path='/portrait' element={<PortraitPage />}/>
                <Route path='/lifestyle' element={<LifestylePage />}/>
                <Route path='/concert' element={<ConcertPage />}/>
            </Routes>
        </Router>
    );
}

export default App;
