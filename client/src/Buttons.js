import React from 'react'

export default function Buttons({ setTotal }) {

    function handleDonateClick(bttnVal) {
        const value = bttnVal.donation;
        setTotal(prevTotal => {
            const donationTotal = prevTotal + value
            return donationTotal;
        })

        fetch("http://localhost:3001/users", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bttnVal)
        })
        .then((data) => console.log(data));
    }

    return (
        <>
        <button onClick={() => handleDonateClick({donation: 5})}>$5</button>
        <button onClick={() => handleDonateClick({donation: 10})}>$10</button>
        <button onClick={() => handleDonateClick({donation: 100})}>$100</button>
        <button onClick={() => handleDonateClick({donation: 1000})}>$1,000</button>
        <button onClick={() => handleDonateClick({donation: 10000})}>$10,000</button>
        </>
    )
}