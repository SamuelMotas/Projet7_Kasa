import React from 'react';
import "../styles/ApartmentGrid.scss"
import ApartmentCard from "./ApartmentCard.jsx"

fetch("db.json")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error);

function ApartmentGrid() {
    return <div className='grid'>
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
    </div>;
}

export default ApartmentGrid;
