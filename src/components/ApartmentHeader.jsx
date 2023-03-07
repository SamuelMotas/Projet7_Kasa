import React from 'react';
import "../styles/ApartmentHeader.scss"

function ApartmentHeader({ accomodation }) {
    const { name } = accomodation.host
    const [firstName, lastName] = name.split(" ")

    return (
        <div className='apartment__header'>
            <div className='apartment__title'>
                <h1>{accomodation.title}</h1>
                <h2>{accomodation.location}</h2>
                <div className='apartment__tags'>
                    {accomodation.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className="apartment__owner">
                <div className='apartment__owner__details'>
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className="apartment__owner__badge">
                        <img src={accomodation.host.picture} alt="host" />
                    </div>
                </div>
                <div className='apartment__owner__stars'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={accomodation.rating >= num ? "on" : ""}>★</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ApartmentHeader;
