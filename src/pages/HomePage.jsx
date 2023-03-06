import React from 'react';
import Banner from '../layout/Banner';
import ApartmentGrid from '../components/ApartmentGrid'
import "./HomePage.scss";

function HomePage() {
  return (
    <>
        <Banner />
        <ApartmentGrid />
    </>
  );
}

export default HomePage;
