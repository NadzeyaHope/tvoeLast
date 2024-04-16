import React from 'react';
import TvoeLogo from "../../../public/TvoeLogo";
import Search from "@/widgets/header/Search";
import Button from "@/shared/Button";

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header__tvoe-logo'} ><TvoeLogo/></div>
            <Search/>
            <div style={{display: 'flex', gap: '8px'}}>
                <Button className={'button-header-7days'}>7 дней за 0 ₽</Button>
                <Button className={'button-promo'}>Промокод</Button>
                <Button className={'button-login'}>Войти</Button>
            </div>
        </div>
    );
};

export default Header;