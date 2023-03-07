import React from 'react';
import Banner from '../layout/Banner';
import "../pages/About.scss"
import ImageBanner from '../components/ImageBanner';
import DescriptionPanel from '../components/DescriptionPanel';

function About() {
    return <>
        <ImageBanner />
        <div className='about__container'>
            <DescriptionPanel title="Fiabilité" content="C'est très important" />
            <DescriptionPanel title="Respect" content="C'est très important" />
            <DescriptionPanel title="Service" content="C'est très important" />
            <DescriptionPanel title="Responsabilité" content="C'est très important" />
        </div>
    </>;
}

export default About;
