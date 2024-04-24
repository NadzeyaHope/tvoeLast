'use client';
import React from 'react';
import {useRouter} from "next/navigation";

interface Props {
    children : string;
    className?: string;
}

const Button = (props : Props) => {
    const { children, className} = props;
    return (
        <button className={className} >
            {children}
        </button>
    );
};

export default Button;