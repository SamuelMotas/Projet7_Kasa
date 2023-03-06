import React from 'react';
import "../styles/ApartmentDescription.scss"


function ApartmentDescription() {
  return (
    <div className="apartment__description">
    <p className='description__header'>
        <span>Description</span>
        <i className="fas fa-chevron-up"></i>
    </p>
    <p className='description__content'>Vous serez à 50m du canal Saint-martin où vous pourrez
        pique-niquer l'été et à côté de nombreux bars et restaurants.
        Au cœur de Paris avec 5 lignes de métro et de nombreux bus.
        Logement parfait pour les voyageurs en solo et les voyageurs d'affaires.
        Vous êtes à1 station de la gare de l'est (7 minutes à pied).
    </p>
</div>
  );
}

export default ApartmentDescription;
