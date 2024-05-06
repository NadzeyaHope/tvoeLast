'use client';
import React, {useState} from 'react';
import {Season} from "@/api/api";
import Episodes from "@/widgets/movies/Episodes";
import './_movie.scss';

interface Props {
    countOfSeasons: Season[];
}

export const SeasonOfMovies = (props: Props) => {
    const {countOfSeasons} = props;
    const [seasonOfCount, setSeasonOfCount] = useState(0)
    const [activeItem, setActiveItem] = useState<number>(0);

    const handleClick = (index: number) => {
        setActiveItem(index);
    };

    const onChangeSeason = (i: number) => {
        setSeasonOfCount(i)
    }

    return (
        <div className={'movie-data'}>
            <div className={'seasons-container'}>
                <div>Трейлер</div>
                {
                    countOfSeasons.map((season: Season, index) => (
                        <div className={'seasons-container__number'} onClick={() => {
                            onChangeSeason(index)
                        }} key={index}>
                            <div className={`${activeItem === Number(season.id) ? 'active' : ''}`}
                                 onClick={() => handleClick(index)}>{index + 1} сезон
                            </div>
                        </div>
                    ))
                }
            </div>
            <Episodes
                seasons={seasonOfCount}
                countOfSeasons={countOfSeasons}
            />
        </div>
    );
};
