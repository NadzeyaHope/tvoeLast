import React from 'react';
import Image from "next/image";
import Spacer from "@/shared/Spacer";
import ButtonMark from "@/shared/ButtonMark";
import Ellipse from "../../../../public/icons/Ellipse";
import Button from "@/shared/Button";
import ButtonIcon from "@/shared/ButtonIcon";
import BookmarkIcon from "../../../../public/icons/BookmarkIcon";
import FavoriteIcon from "../../../../public/icons/FavoriteIcon";
import LinkIcon from "../../../../public/icons/LinkIcon";
import './_mainMovieCover.scss';


interface Props {
    key: number;
    imageSrc: string;
    title: string;
    rating: string;
    year: string;
    image : string,
    genre: string;
    country: string;
    age: string;
}

const MainCoverMovie = (props: Props) => {
    const {
        key: number,
        country,
        age,
        rating,
        genre,
        year,
        imageSrc,
        image,
        title,
    } = props;

    return (
        <div className={'mainCoverMovie'}>
            <Image className={'mainCoverMovie__image'} width={'960'} height={'594'} src={image} alt={image}/>
            <div className={'mainCoverMovie__image-gradient'}>
            </div>
            <div className={'mainCoverMovie__data'}>
                <Image height={101}
                       width={338}
                       src={imageSrc}
                       alt={title}/>
                <Spacer height={'8px'}/>
                <div className={'mainCoverMovie__data__direction'}>
                    <ButtonMark>{rating}</ButtonMark>
                    <Ellipse/>
                    <div>{year}</div>
                    <Ellipse/>
                    <div>{genre}</div>
                    <Ellipse/>
                    <div>{country}</div>
                    <Ellipse/>
                    <div>{age}</div>
                </div>
                <Spacer height={'8px'}/>
                <div className={'mainCoverMovie__data__links'}>
                    <Button className={'mainCoverMovie__data__links__button-gradient'}>Подробнее</Button>
                    <ButtonIcon>
                        <BookmarkIcon/>
                    </ButtonIcon>
                    <ButtonIcon>
                        <FavoriteIcon/>
                    </ButtonIcon>
                    <ButtonIcon>
                        <LinkIcon/>
                    </ButtonIcon>
                </div>
            </div>
        </div>
    );
};

export default MainCoverMovie;