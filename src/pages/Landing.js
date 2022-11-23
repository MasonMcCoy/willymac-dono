import React from 'react';
import { useNavigate } from 'react-router-dom';

import ImageCarousel from '../components/ImageCarousel';

export default function Landing() {

    const navigate = useNavigate();

    return (
        <>
            <p class="donate-copy">
                Help your good pal WillyMac raise some money for completely reasonable endeavors. Totally a very real thing lol.
            </p>
            <div id="content-container">
                <ImageCarousel />
            </div>
            <div id="donate-container">
                <button id="donate-button" onClick={() => navigate('/donate')}>DONATE</button>
            </div>
        </>
    )
}