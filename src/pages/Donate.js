import React from 'react';

import Buttons from '../components/Buttons';

export default function Donate({ setTotal }) {
  return (
    <div>
        <Buttons setTotal={setTotal}/>
    </div>
  )
}
