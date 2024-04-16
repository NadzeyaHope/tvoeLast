import React, { type ComponentProps, type FC } from 'react';

const Container: FC<ComponentProps<'div'>> = (props) => {
    const { className = '', ...rest } = props;
    return <div className={'container'} {...rest} />;
};

export default Container;