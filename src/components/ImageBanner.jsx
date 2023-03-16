import React, { useState } from 'react';
import "../styles/ImageBanner.scss"

function ImageBanner(props) {
    const pictures = props.pictures

    const [currentPicture, setCurrentPicture] = useState(0)

    //Si c'est la première image tu l'as montre sinon ça ne montre rien.
    const getClassName = (i) => {
        if (i === currentPicture) return "show";//class show
        return "";
    };

   
    const moveToNext = () => {
        const newCurrentPicture = currentPicture + 1
        if (newCurrentPicture == pictures.length) {
            setCurrentPicture(0)
            return
        }
        setCurrentPicture(newCurrentPicture)
    }

    const arePicturesAvalaible = () => {
        return pictures && pictures.length > 0
    }

    //Même principe mais dans l'autre sens 
    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1)
            return
        }
        setCurrentPicture(newCurrentPicture)
    }

    const getCarouselOrDefaultImage = () => {
        if (!arePicturesAvalaible()) {
            return <img src='img-about.png' className='show' alt=''></img>
        }
        return pictures.map((pic, i) => (
            <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
        ))
    }

    return (
        <div className='image__banner'>
            <div className='image__container'>{getCarouselOrDefaultImage()}</div>
            {arePicturesAvalaible() &&
                <>   <button className='btn btn-previous' onClick={moveToPrevious}>
                    <i className='fas fa-chevron-left'></i>
                </button>
                    <span className='slide-counter'>
                        {currentPicture + 1} / {pictures.length}
                    </span>
                    <button className='btn btn-next' onClick={moveToNext}>
                        <i className='fas fa-chevron-right'></i>
                    </button>
                </>
            }
        </div>

    );
}

export default ImageBanner;
