import React from 'react';
import Banner from '../layout/Banner';
import "../pages/About.scss"
import ImageBanner from '../components/ImageBanner';
import DescriptionPanel from '../components/DescriptionPanel';

function About() {
    return <>
        <ImageBanner />
        <div className='about__container'>
            <DescriptionPanel title="Fiabilité" content="...." />
            <DescriptionPanel title="Respect" content="qqsdqsdq" />
            <DescriptionPanel title="Service" content="qsdqsd" />
            <DescriptionPanel title="Responsabilité" content="qsdqsd" />
        </div>
    </>;
}

export default About;
