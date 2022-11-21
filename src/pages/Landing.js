import React from 'react';
import { useNavigate } from 'react-router-dom';

import ImageCarousel from '../components/ImageCarousel';

export default function Landing() {

    const navigate = useNavigate();

    return (
        <>
            <p id="donate-copy">
                Help your good pal WillyMac raise some money for completely reasonable endeavors. This is all fake btw.
            </p>
            <div id="carousel-container">
                <ImageCarousel />
            </div>
            <div id="donate-container">
                <button id="donate-button" onClick={() => navigate('/donate')}>DONATE</button>
            </div>
        </>
    )
}