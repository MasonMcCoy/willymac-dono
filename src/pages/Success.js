import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();

    let donation = localStorage.getItem("donation");

    return (
        <div>
            <p class="thanks-copy">
                Thank you for your support, fictitious and otherwise!
                <br></br>
                We'd love to see the support on Twitter! We did all the work for ya, too.
            </p>
            <p id="boiler-tweet">
                I just donated ${donation} to the WillyMacShow fund! I'm doing my part! #WillymacFund
            </p>
            <a id="twitter-link" href="https://twitter.com/" target="blank">To Twitter</a>
            <p class="thanks-copy">
                Check out the links below to WillyMacShow's real content!
            </p>
            <div id="thanks-bttn-container">
                <button onClick={() => navigate('/')}>Go Back</button>
            </div>
            <p id="sponsor-link">A big thanks to our <a href="https://kiwifarms.net/" target="blank"> sponsor</a>!</p>
        </div>
  )
}
