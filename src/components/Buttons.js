import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

export default function Buttons({ setTotal }) {

    const handleDonateClick = async (bttnVal) => {
        setTotal(prevTotal => {
            return prevTotal + bttnVal
        })

        try {
            await addDoc(collection(db, "users"), {
              donation: bttnVal,    
            });
          } catch (err) {
            console.error("Error adding document: ", err);
          }
    }

    return (
        <div id="buttons">
          <button onClick={() => handleDonateClick(5)}>$5</button>
          <button onClick={() => handleDonateClick(10)}>$10</button>
          <button onClick={() => handleDonateClick(100)}>$100</button>
          <button onClick={() => handleDonateClick(1000)}>$1,000</button>
          <button onClick={() => handleDonateClick(10000)}>$10,000</button>
        </div>
    )
}