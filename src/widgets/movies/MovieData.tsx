'use client';
import React, {useEffect, useState} from 'react';
import {moveListType, movieList} from "@/api/api";
import MainCoverMovie from "@/widgets/home/mainCover/MainCoverMovie";


const MovieData = ({params}: { params: string }) => {
    const movieId = String(params);
    const [userAccountData, setUserAccountData] = useState<moveListType[] | null>(null);



    useEffect(() => {
        const onSearchMovieDataOnId = () => {
            const data = movieList.filter((el) => String(el.id) === movieId ?? el)
            setUserAccountData(data)
        }
        onSearchMovieDataOnId();
    }, [ movieId]);


    return (
        <div>
            {userAccountData?.map((elem) => (
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
                    button={<button className={'mainCoverMovie__data__links__button-gradient'} onClick={()=>{}} >Смотреть</button>}
                />
            ))}
        </div>
    );
};

export default MovieData;