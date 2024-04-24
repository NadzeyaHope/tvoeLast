import React from 'react';
import TvoeLogo from "../../../public/TvoeLogo";
import Search from "@/widgets/header/Search";
import Button from "@/shared/Button";
import './_header.scss';
import Container from "@/shared/Container";
import Spacer from "@/shared/Spacer";

const Header = () => {
    return (
        <Container>
            <Spacer height={'20px'}/>
            <div className={'header'}>
                <div className={'header__logo'}><TvoeLogo/></div>
                <Search/>
                <div className={'header__buttons'} >
                    <Button className={'header__buttons__gradient'}>7 дней за 0 ₽</Button>
                    <Button className={'header__buttons__promo'}>Промокод</Button>
                    <Button className={'header__buttons__login'}>Войти</Button>
                </div>
            </div>
            <Spacer height={'4px'}/>
        </Container>
    );
};

export default Header;