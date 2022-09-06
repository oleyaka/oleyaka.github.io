import React from "react";
import Slider from "react-slick";
import cat from '../styles/img/cat.jpg';
import cat2 from '../styles/img/cat2.jpg';
import cat3 from '../styles/img/cat3.jpg';

export default function Photo() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        centerPadding: '200px',
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={cat} alt="" className="slide-single"/>
                </div>
                <div>
                    <img src={cat2} alt="" className="slide-single"/>
                </div>
                <div>
                    <img src={cat3} alt="" className="slide-single"/>
                </div>
            </Slider>
        </div>

    );
}
// export default Photo;