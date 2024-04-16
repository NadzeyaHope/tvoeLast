import React from 'react';
import MainMovieSummary from "@/widgets/home/MainMovieSummary";
import Header from "@/widgets/header/Header";
import MoviesNew from "@/widgets/movies/MoviesNew";
import Spacer from "@/shared/Spacer";

const Home = () => {
    return (
        <div style={{maxWidth : 960}} >
            <Header/>
            <MainMovieSummary/>
            <Spacer height={'20px'}/>
            <MoviesNew/>
        </div>
    );
};

export default Home;