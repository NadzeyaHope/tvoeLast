import React from 'react';
import LinkNavInformation from "@/widgets/footer/LinkNavInformation";

const NavInformation = () => {
    return (
        <div className={'nav-information'} >
            <LinkNavInformation>Контакты</LinkNavInformation>
            <LinkNavInformation>Реферальная программа</LinkNavInformation>
            <LinkNavInformation>Скачать приложение</LinkNavInformation>
            <LinkNavInformation>Вопросы и ответы</LinkNavInformation>
            <LinkNavInformation>Условия использования</LinkNavInformation>
        </div>
    );
};

export default NavInformation;