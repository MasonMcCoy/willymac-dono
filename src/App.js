import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';

import Landing from './pages/Landing';
import AltLanding from './pages/AltLanding';
import Donate from './pages/Donate';
import Success from './pages/Success';

import Header from './components/Header';
import Counter from './components/Counter';
import FinalCounter from './components/FinalCounter';
import Socials from './components/Socials';

import { collection, query, getDocs } from "firebase/firestore";
import { db } from './firebase';

export default function App() {
  // Sets total to 0, and calls for it to update after fetchTotal executes
  // TO-DO: Include some kind of loading component to allow for fetchTotal to run
  const [total, setTotal] = useState(0);
  
  // Queries firestore for user donations and sums them
  const fetchTotal = async () => {

    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q)
    let donoTotal = 0;

    querySnapshot.forEach((doc) => {
      donoTotal += doc.data().donation;
    })
      
    setTotal(donoTotal);   
  }

  // Calls fetchTotal on page load
  useEffect(() => {
    fetchTotal();
  }, []);

  return (
    <Router>
      <>
        <Header />
        {/* <Counter total={total}/> */}
        <FinalCounter />
          <Routes>
            {/* <Route path='/' element={<Landing />}/> */}
            <Route path='/' element={<AltLanding />}/>
            <Route path="/donate" element={<Donate setTotal={setTotal} />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        <Socials />
      </>
    </Router>
  );
}