import React from 'react';
import Header from "@/widgets/header/Header";
import Spacer from "@/shared/Spacer";
import NewMovies from "@/widgets/home/newMovies/NewMovies";
import MainCarusel from "@/widgets/home/mainCover/MainCarusel";
import SubscriptionBlock from "@/widgets/home/subscription/SubscriptionBlock";
import TopMovies from "@/widgets/home/topMovies/TopMovies";
import Footer from "@/widgets/footer/Footer";


const Home = () => {
    return (
        <div>
            <MainCarusel/>
            <Spacer height={'20px'}/>
            <NewMovies/>
            <Spacer height={'64px'}/>
            <SubscriptionBlock/>
            <Spacer height={'64px'}/>
            <TopMovies/>
            <Spacer height={'64px'}/>
        </div>
    );
};

export default Home;