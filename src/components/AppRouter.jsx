import React from 'react';
import {Route, Routes} from "react-router-dom";
import News from "../pages/News";
import Blog from "../pages/Blog";
import Weather from "../pages/Weather";
import Photo from "../pages/Photo";
import NotFoundPage from "../pages/NotFoundPage";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/news" element={<News/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/weather" element={<Weather/>}/>
            <Route path="/photo" element={<Photo/>}/>
            <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
    );
};

export default AppRouter;