import React from 'react';
import './_subscription.scss';
import Button from "@/shared/Button";
import SubscriptionAdvantages from "@/widgets/home/subscription/SubscriptionAdvantages";
import LikeIcon from "../../../../public/icons/LikeIcon";
import BookmarkLiloIcon from "../../../../public/icons/BookmarkLiloIcon";
import StarIcon from "../../../../public/icons/StarIcon";
import MovieIcon from "../../../../public/icons/MovieIcon";
import clsx from "clsx";
import Spacer from "@/shared/Spacer";
import SpacerWidth from "@/shared/SpacerWidth";
import Image from "next/image";
import Container from "@/shared/Container";


const SubscriptionBlock = () => {
    return (
        <Container>
            <div className={'subscription'}>
                <div className={'subscription__widgets'}>
                    <h1 className={clsx('subscription__widgets__title')}>Смотри зарубежное кино</h1>
                    <Spacer height={'32px'}/>
                    <div className={'subscription__widgets__subtitle'}>
                        <div>
                            <SubscriptionAdvantages icon={<LikeIcon/>}>От 149 ₽ в месяц</SubscriptionAdvantages>
                            <Spacer height={'12px'}/>
                            <SubscriptionAdvantages icon={<MovieIcon/>}>Никакой рекламы</SubscriptionAdvantages>
                        </div>
                        <SpacerWidth width={'39' +
                            'px'}/>
                        <div>
                            <SubscriptionAdvantages icon={<BookmarkLiloIcon/>}>Доступно на любом
                                устройстве</SubscriptionAdvantages>
                            <Spacer height={'12px'}/>
                            <SubscriptionAdvantages icon={<StarIcon/>}>Единая подписка без
                                доплат</SubscriptionAdvantages>
                        </div>
                    </div>
                    <Spacer height={'32px'}/>
                    <Button className={'subscription__widgets__button-gradient'}>Смотреть 7 дней за 0 ₽</Button>
                </div>
                <Image className={'subscription__image'} src={'/popcorns.png'} width={896} height={320}
                       alt={'popcorn'}/>
            </div>
        </Container>
    );
};

export default SubscriptionBlock;