import React, { useEffect, useState } from 'react';
import "../styles/ApartmentGrid.scss"
import ApartmentCard from "./ApartmentCard.jsx"


function ApartmentGrid() {
    const [apartments, setApartments] = useState([]);


        useEffect(() => {
            const abortController = new AbortController()
            fetch("db.json", { signal: abortController.signal })
                .then((res) => res.json())
                .then((res) => setApartments(res))
                .catch(console.error);
            return () => {
                abortController.abort() //Pour clean up(nettoyer)
            }
        }, [])
    

    useEffect(() => {
        const abortController = new AbortController()
        fetch("db.json", { signal: abortController.signal })
            .then((res) => res.json())
            .then((res) => setApartments(res))
            .catch(console.error);
        return () => {
            abortController.abort() //Pour clean up(nettoyer)
        }
    }, [])

    return (
        <div className='grid'>
            {apartments.map((apartment) => (
                <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id} />
            ))}
        </div>
    );
}

export default ApartmentGrid;
