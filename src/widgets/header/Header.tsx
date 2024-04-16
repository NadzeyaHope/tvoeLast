import React from 'react';
import TvoeLogo from "../../../public/TvoeLogo";
import Search from "@/widgets/header/Search";
import Button from "@/shared/Button";
import Container from "@/shared/Container";

const Header = () => {
    return (
        <Container>
            <div className={'header'}>
                <TvoeLogo/>
                <Search/>
                <div style={{display : 'flex', gap:'8px'}} >
                    <Button className={'button-header-7days'}>7 дней за 0 ₽</Button>
                    <Button className={'button-promo'} >Промокод</Button>
                    <Button className={'button-login'} >Войти</Button>
                </div>
            </div>
        </Container>
    );
};

export default Header;