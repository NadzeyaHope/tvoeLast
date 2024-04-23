import React from 'react';
import './ButtonNext.scss';
import clsx from "clsx";

interface Props {
    children : string;
    className : string;
}

const ButtonNext = (props : Props) => {
    const {children,className} = props;

    return (
        <button className={clsx("next-button", className)}>{children}</button>
    );
};

export default ButtonNext;