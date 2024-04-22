import {EmblaOptionsType} from "embla-carousel";

export const truncateString = (str: string, maxLength: number): string => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + '...';
    } else {
        return str;
    }
}

export const topWeekMovies = [
    {
        id: 1,
        top : '/moviesTop/numbers/one.png',
        image : '/moviesTop/myper1.png',
        alt : 'my perfect unhappy',
    },
    {
        id: 2,
        top : '/moviesTop/numbers/two.png',
        image : '/moviesTop/star.png',
        alt : 'startek',
    },
    {
        id: 3,
        top : '/moviesTop/numbers/three.png',
        image : '/moviesTop/jhon.jpg',
        alt : 'jhon',
    },
]


export const mainMovieCoverData =
    [
        {
            id : 1,
            title : 'avatar',
            image : '/headerMovie.png',
            imageSrc : '/legendOfAvatar.png',
            rating : '7,9',
            year : '2024',
            genre : 'Фантастика',
            country : 'США',
            age : '16+'
        },
        {
            id : 2,
            title : 'ava',
            image : '/series/467ff1d59f53aa6021157e8ca693690f.png',
            imageSrc : '/legendOfAvatar.png',
            rating : '7,9',
            year : '2024',
            genre : 'Фантастика',
            country : 'США',
            age : '16+'
        },
        {
            id : 3,
            title : 'ava',
            image : '/series/756912cfa91c6503c2513b31801831ee.png',
            imageSrc : '/legendOfAvatar.png',
            rating : '7,9',
            year : '2024',
            genre : 'Фантастика',
            country : 'США',
            age : '16+'
        },
        {
            id : 3,
            title : 'ava',
            image : '/series/d1c06d27902aeb09df408ca2e9f2d6aa.png',
            imageSrc : '/legendOfAvatar.png',
            rating : '7,9',
            year : '2024',
            genre : 'Фантастика',
            country : 'США',
            age : '16+'
        },
    ]


export const MoviesNewData = [
    {
        id: 1,
        title: "На грани",
        duration: '2022, 2 часа 37 минут',
        rating: '8,9',
        imageSrc: '/moviesNew/95c2e2dda0c67375c44d15cd686302f4.jpg'
    },
    {
        id: 2,
        title: "8 подруг Оушена",
        duration: '2022, 2 часа 37 минут',
        rating: '8,2',
        imageSrc: '/moviesNew/ae6a57fd5ac03fae8687dfe4a451c2a1.jpg'
    },
    {
        id: 3,
        title: "Нэнси Дрю",
        duration: '2022, 2 часа 37 минут',
        rating: '9,0',
        imageSrc: '/moviesNew/bb6f16526a5ab8ff1aba4da6001e13cb.jpg'
    },
    {
        id: 4,
        title: "На западном фронте без перемен",
        duration: '2022, 2 часа 37 минут',
        rating: '7,9',
        imageSrc: '/moviesNew/3ef14955ce0395266ce4ec57dfa32766.jpg'
    },
    {
        id: 1,
        title: "На грани",
        duration: '2022, 2 часа 37 минут',
        rating: '8,9',
        imageSrc: '/moviesNew/95c2e2dda0c67375c44d15cd686302f4.jpg'
    },
    {
        id: 2,
        title: "8 подруг Оушена",
        duration: '2022, 2 часа 37 минут',
        rating: '8,2',
        imageSrc: '/moviesNew/ae6a57fd5ac03fae8687dfe4a451c2a1.jpg'
    },
    {
        id: 3,
        title: "Нэнси Дрю",
        duration: '2022, 2 часа 37 минут',
        rating: '9,0',
        imageSrc: '/moviesNew/bb6f16526a5ab8ff1aba4da6001e13cb.jpg'
    },
];

export const OPTIONS: EmblaOptionsType = { dragFree: true }
export const OPTIONS1: EmblaOptionsType = { dragFree: true }