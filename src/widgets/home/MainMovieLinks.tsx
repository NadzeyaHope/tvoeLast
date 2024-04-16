import React from 'react';
import Button from "@/shared/Button";
import ButtonIcon from "@/shared/ButtonIcon";
import BookmarkIcon from "../../../public/icons/BookmarkIcon";
import LikeIcon from "../../../public/icons/LikeIcon";
import LinkIcon from "../../../public/icons/LinkIcon";
import FavoriteIcon from "../../../public/icons/FavoriteIcon";

const MainMovieLinks = () => {
    return (
        <div className={'mainMovieLinks'} >
            <Button className={'button-gradient'}>Подробнее</Button>
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
    );
};

export default MainMovieLinks;