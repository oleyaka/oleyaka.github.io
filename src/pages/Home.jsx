import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="btn-group-vertical">
            <p className="mt-5">Добро пожаловать на сайт Оли!</p>
            <p>Здесь можно посмотреть:</p>

            <Link to="news" className="btn btn-secondary">Новости</Link>
            <Link to="blog" className="btn btn-secondary">Блог</Link>
            <Link to="weather" className="btn btn-secondary">Погоду</Link>
            <Link to="photo" className="btn btn-secondary">Фото</Link>
        </div>
    );
};

export default Home;