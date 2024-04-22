'use client';
import React from 'react';
import EmblaCarousel from "@/shared/carousel/EmblaCarousel";
import {MoviesNewData, OPTIONS} from "@/api/api";
import MovieCard from "@/widgets/home/newMovies/MovieCard";
import Container from "@/shared/Container";
import './_movie-card.scss';


const NewMovies = () => {
    return (
        <div className={'movies-new'} >
            <div className={'movie-card__block-name'}>Новинки</div>
            <EmblaCarousel options={OPTIONS}>
                {MoviesNewData.map((index) => (
                    <MovieCard
                        key={index.id}
                        title={index.title}
                        duration={index.duration}
                        rating={index.rating}
                        imageSrc={index.imageSrc}
                    />
                ))}
            </EmblaCarousel>

        </div>
    );
};

export default NewMovies;