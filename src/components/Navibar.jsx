import React from 'react';
import { Link } from 'react-router-dom';

const Navibar = () => {
    return (
        <div>
            <Link className=' fs-5 text-decoration-none m-2 text-secondary'>Home</Link>
            <Link className=' fs-5 text-decoration-none m-2 text-secondary'>about us</Link>
            <Link className=' fs-5 text-decoration-none m-2 text-secondary'>services</Link>
            <Link className=' fs-5 text-decoration-none m-2 text-secondary'>showcase</Link>
            <Link className=' fs-5 text-decoration-none m-2 text-secondary'>blogs</Link>
            <Link className=' fs-5 text-decoration-none m-2 text-secondary'>contact</Link>
        </div>
    );
};

export default Navibar;