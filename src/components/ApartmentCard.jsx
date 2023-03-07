import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ApartmentCard.scss"

function ApartmentCard() {
    return <Link to="/FicheLogement">
        <div className='apartment'>
            <div className='apartment__subtitle'>Titre de la location</div>
        </div>
    </Link >;
}

export default ApartmentCard;
