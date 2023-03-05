import React from 'react';
import Banner from './components/Banner';
import ApartmentGrid from './components/ApartmentGrid'
import Main from './components/Main.jsx'
import "./App.scss";

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
