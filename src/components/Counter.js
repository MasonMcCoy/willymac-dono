import React from 'react'

export default function Counter({ total }) {
  return (
    <>
    <div id="donation-label">
      Total Donated:
    </div>
    <div id="donation-value">
      ${total.toLocaleString()}
    </div>
    </>
  )
}