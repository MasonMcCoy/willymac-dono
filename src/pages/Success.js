import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();

    return (
        <div>
            <p id="thanks-copy">
                Thank you for your support, fictitious and otherwise!
                <br></br>
                Feel free to check out the links below to WillyMacShow's real content!
            </p>
            <div id="thanks-bttn-container">
            <button onClick={() => navigate('/')}>Go Back</button>
            </div>
        </div>
  )
}
