import React, {ReactNode} from 'react';

const ButtonIcon = ({children} : {children : ReactNode}) => {
    return (
        <div className={'button-icon'} >
            <div className={'button-icon-size'}>
                {children}
            </div>
        </div>
    );
};

export default ButtonIcon;