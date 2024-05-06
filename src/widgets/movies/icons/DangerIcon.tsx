import React from 'react';

const DangerIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 48 48"
        >
            <path
                stroke="#4B4B4B"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M23.81 44a19.641 19.641 0 007.594-1.518 19.768 19.768 0 006.435-4.34 19.949 19.949 0 004.305-6.486A20.075 20.075 0 0043.65 24a20.078 20.078 0 00-1.506-7.656 19.95 19.95 0 00-4.305-6.486 19.769 19.769 0 00-6.435-4.34A19.64 19.64 0 0023.809 4a19.642 19.642 0 00-7.594 1.518 19.77 19.77 0 00-6.435 4.34 19.95 19.95 0 00-4.306 6.486A20.077 20.077 0 003.97 24a20.076 20.076 0 001.505 7.656 19.948 19.948 0 004.306 6.486 19.772 19.772 0 006.435 4.34A19.641 19.641 0 0023.809 44z"
            ></path>
            <path
                fill="#4B4B4B"
                fillRule="evenodd"
                d="M23.808 37a2.47 2.47 0 001.754-.732 2.51 2.51 0 000-3.536 2.47 2.47 0 00-3.508 0 2.51 2.51 0 000 3.536 2.47 2.47 0 001.754.732z"
                clipRule="evenodd"
            ></path>
            <path
                stroke="#4B4B4B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M23.809 12v16"
            ></path>
        </svg>
    );
};

export default DangerIcon;