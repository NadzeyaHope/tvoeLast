import React, {ReactNode} from 'react';
import Image from "next/image";
import ButtonMark from "@/shared/ButtonMark";
import Ellipse from "../../../../public/icons/Ellipse";
import ButtonIcon from "@/shared/ButtonIcon";
import BookmarkIcon from "../../../../public/icons/BookmarkIcon";
import FavoriteIcon from "../../../../public/icons/FavoriteIcon";
import LinkIcon from "../../../../public/icons/LinkIcon";
import './_mainMovieCover.scss';


interface Props {
    image: string;
    key: string;
    imageSrc: string;
    title: string;
    rating: string;
    year: string;
    genre: string;
    country: string;
    age: string;
    description?: ReactNode;
    button: ReactNode;
}

const MainCoverMovie = (props: Props) => {
    const {age, button, description, country, genre, year, imageSrc, image, title, rating, key,} = props;

    return (
        <div className={'mainCoverMovie'}>
            <div className={'mainCoverMovie__image-container'}><Image className={'mainCoverMovie__image-container__image'} width={'960'} height={'594'} src={image} alt={image}/></div>
            <div className={'mainCoverMovie__image-gradient'}>
            </div>
            <div className={'mainCoverMovie__data'}>
                <Image height={101}
                       width={338}
                       src={imageSrc}
                       alt={title}/>
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
                {description}
                <div className={'mainCoverMovie__data__links'}>
                    {button}
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