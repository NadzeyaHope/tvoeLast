import React, {ReactNode} from 'react';

const ButtonIcon = ({children} : {children : ReactNode}) => {
    return (
        <button className={'mainCoverMovie__button-icon'} >
                {children}
        </button>
    );
};

export default ButtonIcon;