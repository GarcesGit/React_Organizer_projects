import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='navbar'>
            <div>
                <Link to='/about'>О сайте</Link>
                <Link to='/projects'>Список проектов</Link>
            </div>
        </div>
    );
};

export default Navbar;
