import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();

    return (
        <div>
            <p class="thanks-copy">
                Thank you for your support, fictitious and otherwise!
                <br></br>
                We'd love to see the support on Twitter! We did all the work for ya, too.
            </p>
            <p id="boiler-tweet">
                I just donated X to the WillyMacShow fund! I'm doing my part! #WillymacFund
            </p>
            <p class="thanks-copy">
                Check out the links below to WillyMacShow's real content!
            </p>
            <div id="thanks-bttn-container">
            <button onClick={() => navigate('/')}>Go Back</button>
            </div>
        </div>
  )
}
