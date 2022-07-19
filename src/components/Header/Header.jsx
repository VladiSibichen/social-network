import React from 'react';
import s from '../Header/Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={'https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png'}></img>
        </header>
    );
};

export default Header;