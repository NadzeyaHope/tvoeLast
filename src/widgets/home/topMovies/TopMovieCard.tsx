import React from 'react';
import './_topMovies.scss';

interface TopMovieCard {
    top: string;
    key: string;
    alt: string;
    image: string;
}


const TopMovieCard: React.FC<TopMovieCard> = ({key, alt, top, image}) => {
    return (
        <div className="top-movies-card">
            <img src={top}  className={'top-movies-card__top'}/>
            <div className={'top-movies-card__image-space'}>
                <img src={image} alt={alt} className="top-movies-card__image"/>
            </div>
        </div>
    );
}
export default TopMovieCard;