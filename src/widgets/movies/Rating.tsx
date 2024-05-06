import React from 'react';

const Rating = ({children} : {children : string}) => {
    return (
        <div className={'rating'}>
            Рейтинг TVOЁ {children}
            <div className={'rating__mark'} >Поставить оценку</div>
        </div>
    );
};

export default Rating;