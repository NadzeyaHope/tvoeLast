import React from 'react';
import CommentVectorIcon from "@/widgets/movies/icons/CommentVectorIcon";
import EmblaCarousel from "@/shared/carousel/EmblaCarousel";
import {CommentType, truncateString} from "@/api/api";

interface Props {
    comments : CommentType[];
}

const Comment = (props : Props) => {
    const {comments} = props;
    return (
        <div className={"comment"}>
            <div className={'comment__title'}>
                <div>Отзывы</div>
                <div><CommentVectorIcon/></div>
            </div>
            <EmblaCarousel>
                {
                    comments.map((el, i) => (
                        <div className={'comment__card'} key={i}>
                            <div className={'comment__card__main'}>
                                <div className={'comment__name'}>{el.name}</div>
                                <div className={'comment__rating'}>{el.rating}</div>
                            </div>
                            <div className={'comment__time'}>{el.time}</div>
                            <div className={'comment__text'} >{
                                truncateString(el.text, 121)
                            }</div>
                            <p className={'comment__time'} >Читать дальше</p>
                        </div>
                    ))
                }
            </EmblaCarousel>
        </div>
    );
};

export default Comment;