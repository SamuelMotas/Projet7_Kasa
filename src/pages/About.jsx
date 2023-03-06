import React from 'react';
import Banner from '../layout/Banner';
import "../pages/About.scss"
import ImageBanner from '../components/ImageBanner';
import DescriptionPanel from '../components/DescriptionPanel';

function About() {
    return <>
        <ImageBanner />
        <div className='about__container'>
            <DescriptionPanel />
            <DescriptionPanel />
            <DescriptionPanel />
            <DescriptionPanel />
        </div>
    </>;
}

export default About;
