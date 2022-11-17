import { useEffect, useState } from 'react';
import Header from './Header';
import Counter from './Counter';
import Buttons from './Buttons';

export default function App() {
  // This will initialize with what we have in the db
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then((response) => response.json())
    .then((data) => {
      const userDonos = data.map(user => user.donation);
      setTotal(userDonos.reduce((acc, curr) => acc + curr));
      }
    )
  }, []);

  return (
    <>
      <Header />
      <Counter total={total}/>
      <Buttons setTotal={setTotal}/>
    </>
  );
}