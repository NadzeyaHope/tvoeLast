import React from 'react';
import {Season} from "@/api/api";
import Image from "next/image";
import EmblaCarousel from "@/shared/carousel/EmblaCarousel";
import DescriptionMovie from "@/widgets/movies/DescriptionMovie";
import Comment from "@/widgets/movies/Comment";
import Rating from "@/widgets/movies/Rating";

interface Props {
    seasons: number;
    countOfSeasons: Season[];
}

const Episodes = (props: Props) => {
    const {seasons, countOfSeasons} = props;
    return (
        <div>{countOfSeasons.map((el, i) => (
            <div key={i}>{i === seasons ? <div className={'episodes'}>
                <EmblaCarousel>
                    {
                        el.episodes.map((el, i) => (
                            <div className={'episodes__card'} key={i}>
                                <div>
                                    <Image className={'episodes__card__image'} alt={'df'} src={el.image} width={325} height={198}/>
                                </div>
                                <div className={'episodes__card__number-episode'}>{el.episode}</div>
                                <div className={'episodes__card__done'}>{
                                    el.isDone ? 'Просмотрено' : ''
                                }</div>
                            </div>
                        ))
                    }
                </EmblaCarousel>
                <DescriptionMovie description={el.title.description} dangerText={el.title.warnings}/>
                <Rating>{el.title.rating}</Rating>
                <Comment
                    comments={el.comments}
                />
            </div> : ''}</div>
        ))}</div>
    );
};

export default Episodes;
// export default SeasonOfMovies;