'use client';
import React from 'react';
import './_topMovies.scss';
import {OPTIONS, topWeekMovies} from "@/api/api";
import EmblaCarousel from "@/shared/carousel/EmblaCarousel";
import TopMovieCard from "@/widgets/home/topMovies/TopMovieCard";
import Spacer from "@/shared/Spacer";

const TopMovies = () => {
    return (
        <div className={'top-movies'} >
            <p className={'top-movies__title'}>топ недели</p>
            <Spacer height={'32px'}/>
            <EmblaCarousel options={OPTIONS}>
                {topWeekMovies.map((index) => (
                    <TopMovieCard
                        key={index.id}
                        top={index.top}
                        image={index.image}
                        alt={index.alt}
                    />
                ))}
            </EmblaCarousel>
        </div>
    );
};

export default TopMovies;