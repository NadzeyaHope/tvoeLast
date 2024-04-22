import React from 'react';
import TvoeLogo from "../../../public/TvoeLogo";
import Search from "@/widgets/header/Search";
import Button from "@/shared/Button";
import './_header.scss';
import Container from "@/shared/Container";

const Header = () => {
    return (
        <Container>
            <div className={'header'}>
                <div className={'header__tvoe-logo'}><TvoeLogo/></div>
                <Search/>
                <div style={{display: 'flex', gap: '8px'}}>
                    <Button className={'header__button-gradient'}>7 дней за 0 ₽</Button>
                    <Button className={'header__button-promo'}>Промокод</Button>
                    <Button className={'header__button-login'}>Войти</Button>
                </div>
            </div>
        </Container>
    );
};

export default Header;