import React, {ReactNode} from 'react';

const ButtonIcon = ({children} : {children : ReactNode}) => {
    return (
        <div className={'mainCoverMovie__button-icon'} >
                {children}
        </div>
    );
};

export default ButtonIcon;