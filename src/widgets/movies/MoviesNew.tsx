import React from 'react';
import MovieCard from "@/shared/MovieCard";

const Movies = [
    {
        title: "На грани",
        duration : '2022, 2 часа 37 минут',
        rating : '8,9',
        imageSrc : '/moviesNew/95c2e2dda0c67375c44d15cd686302f4.jpg'
    },
    {
        title: "8 подруг Оушена",
        duration : '2022, 2 часа 37 минут',
        rating : '8,2',
        imageSrc : '/moviesNew/ae6a57fd5ac03fae8687dfe4a451c2a1.jpg'
    },
    {
        title: "Нэнси Дрю",
        duration : '2022, 2 часа 37 минут',
        rating : '9,0',
        imageSrc : '/moviesNew/bb6f16526a5ab8ff1aba4da6001e13cb.jpg'
    },
    {
        title: "На западном фронте без перемен",
        duration : '2022, 2 часа 37 минут',
        rating : '7,9',
        imageSrc : '/moviesNew/3ef14955ce0395266ce4ec57dfa32766.jpg'
    },
    {
        title: "На западном фронте без перемен",
        duration : '2022, 2 часа 37 минут',
        rating : '7,9',
        imageSrc : '/moviesNew/3ef14955ce0395266ce4ec57dfa32766.jpg'
    },
]

const MoviesNew = () => {
    return (
        <div className={'moviesNew'} >
            {
                Movies.map((el)=>(
                    <MovieCard
                        title={el.title}
                        duration={el.duration}
                        rating={el.rating}
                        imageSrc={el.imageSrc}
                    />
                ))
            }
        </div>
    );
};

export default MoviesNew;