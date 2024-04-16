'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const Celebrity = () => {
    const params = useParams<{ movieId: string }>();

    return (
       <>
           account
       </>
    );
};

export default Celebrity;