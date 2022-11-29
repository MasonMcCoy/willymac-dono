import React from 'react';

import ImageCarousel from '../components/ImageCarousel';

export default function Landing() {

    return (
        <>
            <p class="donate-copy">
                Thank you all for the donations, you absolute madlads. Together we made number go up and that is something that we can all be proud of. What a wild ride it has been, I'll see you all in court.
            </p>
            <div id="content-container">
                <ImageCarousel />
            </div>
            <p class="donate-copy">Keep clout chasing with the provided tweet below!</p>
            <p id="boiler-tweet">
                Dang, I wasn't able to donated to the WillyMacShow fund! Willy have mercy on my soul! #WillymacFund
            </p>
            <a id="twitter-link" href="https://twitter.com/" target="blank">To Twitter</a>
        </>
    )
}