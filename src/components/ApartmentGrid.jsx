import React from 'react';
import "../styles/ApartmentGrid.scss"
import Appartment from "./Apartment.jsx"

function ApartmentGrid() {
    return <div className='grid'>
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
    </div>;
}

export default ApartmentGrid;
