'use client'
import React from 'react';
import {mainMovieCoverData, OPTIONS} from "@/api/api";
import EmblaCarousel from "@/shared/carousel/EmblaCarousel";
import MainCoverMovie from "@/widgets/home/mainCover/MainCoverMovie";
import {useRouter} from "next/navigation";


const MainCarusel = () => {
    const router = useRouter();

    const onChangeAccount = (id : string) => {
         router.push(`/movie/${id}`);
         return
    };


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
                    button={<button className={'mainCoverMovie__data__links__button-gradient'} onClick={()=>{onChangeAccount(String(el.id))}} >Подробнее</button>}
                />
            ))}
        </EmblaCarousel>
    );
};

export default MainCarusel;