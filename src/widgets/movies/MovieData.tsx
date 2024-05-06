'use client';
import React, {useEffect, useState} from 'react';
import {movieList, movieListType} from "@/api/api";
import MainCoverMovie from "@/widgets/home/mainCover/MainCoverMovie";
import {SeasonOfMovies} from "@/widgets/movies/SeasonOfMovies";
import Spacer from "@/shared/Spacer";
import DescriptionMovie from "@/widgets/movies/DescriptionMovie";


const MovieData = ({params}: { params: string }) => {
    const movieId = String(params);
    const [movieData, setMovieData] = useState<movieListType[] | null>(null);


    useEffect(() => {
        const onSearchMovieDataOnId = () => {
            const data = movieList.filter((el) => String(el.id) === movieId ?? el)
            setMovieData(data)
        }
        onSearchMovieDataOnId();
    }, [movieId]);


    return (
        <div>
            {movieData?.map((elem) => (
                <>
                    <MainCoverMovie
                        image={elem.image}
                        key={elem.id}
                        imageSrc={elem.imageSrc}
                        title={elem.title}
                        rating={elem.rating}
                        year={elem.year}
                        genre={elem.genre}
                        country={elem.country}
                        age={elem.age}
                        description={
                            <div className={'mainCoverMovie__description'}>
                                {elem.description}
                            </div>
                        }
                        button={<button className={'mainCoverMovie__data__links__button-gradient'} onClick={() => {
                        }}>Смотреть</button>}
                    />
                    <Spacer height={'64px'}/>
                    <SeasonOfMovies
                        countOfSeasons={elem.countOfSeasons}
                    />
                    <Spacer height={'64px'}/>
                </>
            ))}
        </div>
    );
};

export default MovieData;