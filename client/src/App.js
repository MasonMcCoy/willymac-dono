import { useState } from 'react';
import Header from './Header';
import Counter from './Counter';
import Buttons from './Buttons';

export default function App() {
  // This will initialize with what we have in the db
  const [total, setTotal] = useState(0);
  
  return (
    <>
      <Header />
      <Counter total={total}/>
      <Buttons setTotal={setTotal}/>
    </>
  );
}