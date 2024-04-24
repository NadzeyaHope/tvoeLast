import {EmblaOptionsType} from "embla-carousel";

export const truncateString = (str: string, maxLength: number): string => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + '...';
    } else {
        return str;
    }
}


export interface moveListType {
    id: string;
    title: string;
    image: string;
    imageSrc: string;
    rating: string;
    year: string;
    genre: string;
    country: string;
    age: string;
    description?: string;
}

[]
export const movieList = [
    {
        id: '0',
        title: 'avatar',
        image: '/headerMovie.png',
        imageSrc: '/legendOfAvatar.png',
        rating: '7,9',
        year: '2024',
        genre: 'Фантастика',
        country: 'США',
        age: '16+',
        description: 'Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.',
        countOfSeasons: 4,
        seasonFirstTitle: {
            description: 'Прекрасная планета Пандорра по-прежнему похожа на рай, где нашел себе приют бывший солдат Салли. Подрастают дети его нового народа, они играют на морских рифах и в подводном царстве. Кроме подростков на’ви на Пандорре растет и земной ребенок Джек Чемпион. Воскресают те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий полковник. Наконец, и земные корпорации снова предъявляют свои права на богатства Пандорры. Независимость фантастического первобытного рая придется отстаивать всем, кто его населяет.',
            warnings: 'Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.',
            rating : '8.4',
            comments : [
                {
                    id : '1',
                    name : 'Николай',
                    time : '10 Мая 2023',
                    text : 'Как пo мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.',
                    rating : '9',
                },
                {
                    id : '1',
                    name : 'Николай',
                    time : '10 Мая 2023',
                    text : 'Как пo мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.',
                    rating : '9',
                },
                {
                    id : '1',
                    name : 'Николай',
                    time : '10 Мая 2023',
                    text : 'Как пo мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому.',
                    rating : '9',
                },
            ]
        },
        seasonFirstEpisodes: [
            {
                id: '0',
                episode: '1 серия',
                image: '/series/467ff1d59f53aa6021157e8ca693690f.png',
                timeCode: '43:54',
                isDone: true,
            },
            {
                id: '1',
                episode: '2 серия',
                image: '/series/756912cfa91c6503c2513b31801831ee.png',
                timeCode: '43:54',
                isDone: true,
            },
            {
                id: '2',
                episode: '3 серия',
                image: '/series/d1c06d27902aeb09df408ca2e9f2d6aa.png',
                timeCode: '43:54',
                isDone: true,
            },
        ]
    },
]


export const topWeekMovies = [
    {
        id: '1',
        top: '/moviesTop/numbers/one.png',
        image: '/moviesTop/myper1.png',
        alt: 'my perfect unhappy',
    },
    {
        id: '2',
        top: '/moviesTop/numbers/two.png',
        image: '/moviesTop/star.png',
        alt: 'startek',
    },
    {
        id: '3',
        top: '/moviesTop/numbers/three.png',
        image: '/moviesTop/jhon.jpg',
        alt: 'jhon',
    },
]

export interface mainMovieCoverDataType {
    id: string;
    title: string;
    image: string;
    imageSrc: string;
    rating: string;
    year: string;
    genre: string;
    country: string;
    age: string;
}

[]

export const mainMovieCoverData =
    [
        {
            id: '0',
            title: 'avatar',
            image: '/headerMovie.png',
            imageSrc: '/legendOfAvatar.png',
            rating: '7,9',
            year: '2024',
            genre: 'Фантастика',
            country: 'США',
            age: '16+'
        },
        {
            id: '1',
            title: 'ava',
            image: '/series/467ff1d59f53aa6021157e8ca693690f.png',
            imageSrc: '/legendOfAvatar.png',
            rating: '7,9',
            year: '2024',
            genre: 'Фантастика',
            country: 'США',
            age: '16+'
        },
        {
            id: '2',
            title: 'stc',
            image: '/series/756912cfa91c6503c2513b31801831ee.png',
            imageSrc: '/legendOfAvatar.png',
            rating: '7,9',
            year: '2024',
            genre: 'Фантастика',
            country: 'США',
            age: '16+'
        },
        {
            id: '3',
            title: 's',
            image: '/series/d1c06d27902aeb09df408ca2e9f2d6aa.png',
            imageSrc: '/legendOfAvatar.png',
            rating: '7,9',
            year: '2024',
            genre: 'Фантастика',
            country: 'США',
            age: '16+'
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

export const OPTIONS: EmblaOptionsType = {dragFree: true}