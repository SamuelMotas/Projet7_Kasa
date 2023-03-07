import React, { useEffect, useState } from 'react';
import "../pages/ApartmentPage.scss"
import DescriptionPanel from '../components/DescriptionPanel';
import "../styles/DescriptionPanel.scss"
import ImageBanner from '../components/ImageBanner';
import ApartmentHeader from '../components/ApartmentHeader';
import { useLocation } from 'react-router-dom';


function ApartmentPage() {
    const location = useLocation()
    const [accomodation, setaccomodation] = useState(null)

    useEffect(fetchApartmentData, [])

    function fetchApartmentData() {
        fetch("db.json")
            .then((res) => res.json())
            .then((accomodations) => {
                const accomodation = accomodations.find((accomodation) => accomodation.id === location.state.apartmentId);
                setaccomodation(accomodation)
            })
            .catch(console.error);
    }
    if (accomodation == null) return <div>Loading...</div>

    return <div className='apartment-page'>
        <ImageBanner imageUrl={accomodation.cover} />
        <ApartmentHeader accomodation={accomodation} />

        <div className='apartment__description__area'>
            <DescriptionPanel title="Description" content={accomodation.description} />
            <DescriptionPanel title="Equipements"
                content={accomodation.equipments.map((equipements) =>
                    (<li>{equipements}</li>))} />
        </div>
    </div>;
}

export default ApartmentPage;
