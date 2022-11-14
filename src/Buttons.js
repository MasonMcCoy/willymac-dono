import React from 'react'

export default function Buttons({ setTotal }) {

    function handleDonateClick(donation) {
        setTotal(prevTotal => {
            const donationTotal = prevTotal + donation
            return donationTotal;
        })
    }

    return (
        <>
        <button onClick={() => handleDonateClick(5)}>$5</button>
        <button onClick={() => handleDonateClick(10)}>$10</button>
        <button onClick={() => handleDonateClick(100)}>$100</button>
        <button onClick={() => handleDonateClick(1000)}>$1,000</button>
        <button onClick={() => handleDonateClick(10000)}>$10,000</button>
        </>
    )
}