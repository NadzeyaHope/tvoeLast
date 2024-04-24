'use client';

import React from 'react';
import {useParams} from 'next/navigation';
import MovieData from "@/widgets/movies/MovieData";
import Spacer from "@/shared/Spacer";

const Celebrity = () => {
    const params = useParams<{ movieId: string }>();


    return (
       <>
           <MovieData params={params.movieId}/>
           <Spacer height={'64px'}/>
       </>
    );
};

export default Celebrity;