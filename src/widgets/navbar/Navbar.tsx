'use client'
import React, {useState} from 'react';
import './_navbar.scss';
import HomeIcon from "../../../public/navIcons/HomeIcon";
import FilmsIcon from "../../../public/navIcons/FilmsIcon";
import MoviesIcon from "../../../public/navIcons/MoviesIcon";
import TVIcon from "../../../public/navIcons/TVIcon";
import HeardIcon from "../../../public/navIcons/HeardIcon";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<number>(0);

    const handleClick = (index: number) => {
        setActiveItem(index);
    };


    return (
        <ul className="navbar">
            <li className={`navbar__item ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                <div className={'navbar__item__icon'}><HomeIcon/></div>
                <a>Главная</a>
            </li>
            <li className={`navbar__item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                <div className={'navbar__item__icon'}><FilmsIcon/></div>
                <a>Фильмы</a>
            </li>
            <li className={`navbar__item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                <div className={'navbar__item__icon'}><MoviesIcon/></div>
                <a>Сериалы</a>
            </li>
            <li className={`navbar__item ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                <div className={'navbar__item__icon'}><TVIcon/></div>
                <a style={{width : 49}} >ТВ каналы</a>
            </li>
            <li className={`navbar__item ${activeItem === 4 ? 'active' : ''}`} onClick={() => handleClick(4)}>
                <div className={'navbar__item__icon'}><HeardIcon/></div>
                <a>Моё</a>
            </li>
        </ul>
    );
};

export default Navbar;