import React from 'react';

const ButtonMark = ({children} : {children : string}) => {
    return (
        <div className={'button-mark'}>{children}</div>
    );
};

export default ButtonMark;