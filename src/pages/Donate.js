import React from 'react';
import { useNavigate } from 'react-router-dom';

import Buttons from '../components/Buttons';

export default function Donate({ setTotal }) {
    const navigate = useNavigate();

    return (
        <>
            <p class="donate-copy">
                Amount I would like to donate to help my favorite content creator leave the country for reasons that I will disclose either January 1st, 2023 or sometime in 2025.
            </p>
            <Buttons setTotal={setTotal}/>
            <div id="no-thanks-bttn-container">
                <button onClick={() => navigate('/')}>No Thanks!</button>
            </div>
        </>
  )
}
