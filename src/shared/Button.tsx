import React from 'react';

interface Props {
    children : string;
    className?: string;
}

const Button = (props : Props) => {
    const { children, className } = props;
    return (
        <div className={className} >
            {children}
        </div>
    );
};

export default Button;