import React from 'react'

export default function Counter({ total }) {
  return (
    <div>
      Total Donated:
      <br></br>
      ${total.toLocaleString()}
    </div>
  )
}
