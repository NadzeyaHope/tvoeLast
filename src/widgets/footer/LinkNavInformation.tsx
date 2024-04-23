import React from 'react';
import './_footer.scss';

interface Props {
    children: string;
}

const LinkNavInformation = (props : Props) => {
    const {children} = props;
    return (
        <a className={'nav-information__link'} >
            {children}
        </a>
    );
};

export default LinkNavInformation;