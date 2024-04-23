import React from 'react';
import LogoFooter from "../../../public/LogoFooter";
import './_footer.scss';

const LabelFooter = () => {
    return (
        <div className={'label-footer'} >
            <h2 className={'label-footer__info'} >2023, ООО «ТВОЁ ЛАЙВ» 18+ ИНН 7720904034</h2>
            <div className={'label-footer__logo'} ><LogoFooter/></div>
        </div>
    );
};

export default LabelFooter;