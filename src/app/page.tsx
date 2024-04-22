import React from 'react';
import Header from "@/widgets/header/Header";
import Spacer from "@/shared/Spacer";
import NewMovies from "@/widgets/home/newMovies/NewMovies";
import MainCarusel from "@/widgets/home/mainCover/MainCarusel";
import SubscriptionBlock from "@/widgets/home/subscription/SubscriptionBlock";
import TopMovies from "@/widgets/home/topMovies/TopMovies";


const Home = () => {
    return (
        <div>
            <Header/>
            <MainCarusel/>
            <Spacer height={'20px'}/>
            <NewMovies/>
            <Spacer height={'64px'}/>
            <SubscriptionBlock/>
            <Spacer height={'64px'}/>
            <TopMovies/>
        </div>
    );
};

export default Home;