import React from 'react';
import Image from "next/image";
import MainMovieData from "@/widgets/home/MainMovieData";
import MainMovieLinks from "@/widgets/home/MainMovieLinks";
import Container from "@/shared/Container";

const MainMovieSummary = () => {
    return (
            <div className={'mainMovieSummary'}>
                <div className={'image-gradient'}/>
                <Container>
                    <div className={'mainMovieSummaryTitle'}>
                        <Image className={'mainMovieName'} height={101} width={338} src={'/legendOfAvatar.png'}
                               alt={'legendOfAvatar'}/>
                        <div className={'spacer'}/>
                        <MainMovieData/>
                        <div className={'spacer'}/>
                        <MainMovieLinks/>
                    </div>
                </Container>
            </div>
    );
};

export default MainMovieSummary;