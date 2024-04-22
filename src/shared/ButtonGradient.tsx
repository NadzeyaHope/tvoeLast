import React from 'react';
import Button from "@/shared/Button";
import clsx from "clsx";

const ButtonGradient = ({children, className} : {children : string, className? : string}) => {
    return (
        <div>
            <Button className={clsx('button-gradient', className)}>{children}</Button>
        </div>
    );
};

export default ButtonGradient;