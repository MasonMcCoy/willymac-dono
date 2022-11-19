import { useEffect, useState } from 'react';
import Header from './Header';
import Counter from './Counter';
import Buttons from './Buttons';

import { collection, query, getDocs } from "firebase/firestore";
import { db } from './firebase';

export default function App() {
  // This will initialize with what we have in the db
  const [total, setTotal] = useState(0);
  
  const fetchTotal = async () => {

    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q)
    let donoTotal = 0;

    querySnapshot.forEach((doc) => {
      console.log(doc.data().donation);
      donoTotal += doc.data().donation;
    })
      
    setTotal(donoTotal);   
  }

  useEffect(() => {
    fetchTotal();
  }, []);

  return (
    <>
      <Header />
      <Counter total={total}/>
      <Buttons setTotal={setTotal}/>
    </>
  );
}