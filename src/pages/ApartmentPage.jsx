import React from 'react';
import "../pages/ApartmentPage.scss"
import DescriptionPanel from '../components/DescriptionPanel';
import "../styles/DescriptionPanel.scss"
import ImageBanner from '../components/ImageBanner';
import ApartmentHeader from '../components/ApartmentHeader';


function ApartmentPage() {
    return <div className='apartment-page'>
        <ImageBanner />
        <ApartmentHeader />

        <div className='apartment__description__area'>
            <DescriptionPanel />
            <DescriptionPanel />
        </div>
    </div>;
}

export default ApartmentPage;
