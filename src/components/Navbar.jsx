import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__links">Главная</Link>
            <Link to="/news" className="navbar__links">Новости</Link>
            <Link to="/blog" className="navbar__links">Блог</Link>
            <Link to="/weather" className="navbar__links">Погода</Link>
            <Link to="/photo" className="navbar__links">Галерея</Link>
        </div>
    );
};

export default Navbar;