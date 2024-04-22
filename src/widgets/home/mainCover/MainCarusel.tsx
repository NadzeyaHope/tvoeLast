'use client'
import React from 'react';
import {mainMovieCoverData, OPTIONS} from "@/api/api";
import EmblaCarousel from "@/shared/carousel/EmblaCarousel";
import MainCoverMovie from "@/widgets/home/mainCover/MainCoverMovie";


const MainCarusel = () => {


    return (
        <EmblaCarousel options={OPTIONS}>
            {mainMovieCoverData.map((el) => (
                <MainCoverMovie
                    image={el.image}
                    key={el.id}
                    imageSrc={el.imageSrc}
                    title={el.title}
                    rating={el.rating}
                    year={el.year}
                    genre={el.genre}
                    country={el.country}
                    age={el.age}
                />
            ))}
        </EmblaCarousel>
    );
};

export default MainCarusel;