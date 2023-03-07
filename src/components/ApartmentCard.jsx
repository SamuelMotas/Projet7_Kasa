import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ApartmentCard.scss"

function ApartmentCard(props) {
    return <Link to="/FicheLogement">
        <div className='apartment'>
            <img src={props.imageUrl} alt="img" />
            <div className='apartment__subtitle'>{props.title}</div>
        </div>
    </Link >;
}

export default ApartmentCard;
