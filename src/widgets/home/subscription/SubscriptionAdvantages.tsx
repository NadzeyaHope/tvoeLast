import React, {ReactNode} from 'react';
import LikeIcon from "../../../../public/icons/LikeIcon";


interface Props {
    children : string;
    icon : ReactNode;
}

const SubscriptionAdvantages = (props : Props) => {
    const {icon,children} = props;
    return (
        <div className={'advantages'}>
            <div>{icon}</div>
            <p>{children}</p>
        </div>
    );
};

export default SubscriptionAdvantages;