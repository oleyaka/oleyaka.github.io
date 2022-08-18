import React from 'react';

const Home = () => {
    return (
        <div className="btn-group-vertical">
            <p className="mt-5">Добро пожаловать на сайт Оли!</p>
            <p>Здесь можно посмотреть:</p>

            <a href="news" className="btn btn-secondary">Новости</a>
            <a href="blog" className="btn btn-secondary">Блог</a>
            <a href="weather" className="btn btn-secondary">Погоду</a>
            <a href="photo" className="btn btn-secondary">Фото</a>
        </div>
    );
};

export default Home;