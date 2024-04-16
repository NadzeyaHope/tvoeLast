import React from 'react';
import Image from "next/image";
import MainMovieData from "@/widgets/home/MainMovieData";
import MainMovieLinks from "@/widgets/home/MainMovieLinks";
import Container from "@/shared/Container";
import Spacer from "@/shared/Spacer";

const MainMovieSummary = () => {
    return (
            <div className={'mainMovieSummary'}>
                <div className={'image-gradient'}/>
                    <div className={'mainMovieSummaryTitle'}>
                        <Image className={'mainMovieName'} height={101} width={338} src={'/legendOfAvatar.png'}
                               alt={'legendOfAvatar'}/>
                        <Spacer height={'8px'}/>
                        <MainMovieData/>
                        <Spacer height={'8px'}/>
                        <MainMovieLinks/>
                    </div>
            </div>
    );
};

export default MainMovieSummary;