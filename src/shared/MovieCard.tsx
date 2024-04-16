import React from 'react';
import {truncateString} from "@/api/api";
import Spacer from "@/shared/Spacer";

interface MovieCardProps {
    title: string;
    duration: string;
    rating: number;
    imageSrc: string;
}


const MovieCard: React.FC<MovieCardProps> = ({ title, duration, rating, imageSrc }) => {
    return (
        <div className="movie-card">
            <div className={'movie-card__rating'}>{rating}</div>
            <img src={imageSrc} alt={title} className="movie-card__image"/>
            <Spacer height={'8px'}/>
            <div className={'movie-card__title'}>
                {truncateString(String(title), 24)}
            </div>
            <div className={'movie-card__duration'}>{duration}</div>
        </div>
    );
}

export default MovieCard;