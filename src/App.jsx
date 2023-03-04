import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ApartmentGrid from './components/ApartmentGrid'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import "./App.css";

function App() {
  return (
    <div>
      <Main>
        <Banner />
        <ApartmentGrid />
      </Main>
    </div>
  );
}

export default App;
