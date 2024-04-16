import React from 'react';
import MainMovieSummary from "@/widgets/home/MainMovieSummary";
import Header from "@/widgets/header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <MainMovieSummary/>
        </div>
    );
};

export default Home;