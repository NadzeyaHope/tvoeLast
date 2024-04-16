import React from 'react';
import Ellipse from "../../../public/icons/Ellipse";
import ButtonMark from "@/shared/ButtonMark";

const MainMovieData = () => {
    return (
        <div className={'mainMovieData'}>
            <ButtonMark>7,9</ButtonMark>
            <Ellipse/>
            <div>2024</div>
            <Ellipse/>
            <div>Фентези</div>
            <Ellipse/>
            <div>США</div>
            <Ellipse/>
            <div>16+</div>
        </div>
    );
};

export default MainMovieData;