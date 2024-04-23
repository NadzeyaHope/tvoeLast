import React from 'react';
import YoutubeIcon from "../../../public/socialMedia/YoutubeIcon";
import VkIcon from "../../../public/socialMedia/VkIcon";
import TelegramIcon from "../../../public/socialMedia/TelegramIcon";
import Button from "@/shared/Button";
import './_footer.scss';

const Support = () => {
    return (
        <div className={'support'}>
            <Button className={'support__button-support'}>Написать в поддержку</Button>
            <div className={'support__social-media'}>
                <a className={'support__social-media__link'}>
                    <p>Youtube</p>
                    <div><YoutubeIcon/></div>
                </a>
                <a className={'support__social-media__link'}>
                    <p>ВКонтакте</p>
                    <div><VkIcon/></div>
                </a>
                <a className={'support__social-media__link'}>
                    <p>Telegram</p>
                    <div><TelegramIcon/></div>
                </a>
            </div>
        </div>
    );
};

export default Support;