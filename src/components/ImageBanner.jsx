import React from 'react';
import "../styles/ImageBanner.scss"

function ImageBanner(props) {
    const imageUrl = props.imageUrl ? props.imageUrl : "img-about.png"

    return (
        <div className='image__banner'>
            <img src={imageUrl} alt="background" />
        </div>

    );
}

export default ImageBanner;
