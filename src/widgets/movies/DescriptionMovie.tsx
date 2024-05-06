import React from 'react';
import DangerIcon from "@/widgets/movies/icons/DangerIcon";

interface Props {
    description: string;
    dangerText : string;
}

const DescriptionMovie = (props : Props) => {
    const {dangerText, description} = props;
    return (
        <div className={'description'} >
            <div className={'description__nav'}>
                <div>Описание</div>
                <div>Сьемочная группа</div>
                <div>Информация</div>
            </div>
            <div className={'description__text'}>
                {description}
            </div>
            <div className={'description__danger'} >
                <DangerIcon/>
                <div className={'description__danger-text'}>
                    {dangerText}
                </div>
            </div>
        </div>
    );
};

export default DescriptionMovie;