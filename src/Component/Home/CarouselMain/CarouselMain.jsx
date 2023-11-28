
import Slider from "react-slick";
import carouselOne from '../../../assets/images/carousel-1.png';
import carouselTwo from '../../../assets/images/carousel-2.png';
import carouselThree from '../../../assets/images/carousel-3.png';
import carouselFour from '../../../assets/images/carousel-4.png';
import carouselFive from '../../../assets/images/carousel-5.png';
import { Component } from "react";


export default class CarouselMain extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
    
    return (
        <div className="mt-20">
            <Slider {...settings}>
            <div className="slide-height mr-20 ml-20">
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src={carouselOne} alt="Creative Agency"/>
                    </a>
                </figure>
            </div>
            <div className="slide-height mr-20 ml-20">
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src={carouselTwo} alt="Creative Agency"/>
                    </a>
                </figure>
            </div>
            <div className="slide-height mr-20 ml-20">
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src={carouselThree} alt="Creative Agency"/>
                    </a>
                </figure>
            </div>
            <div className="slide-height mr-20 ml-20">
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src={carouselFour} alt="Creative Agency"/>
                    </a>
                </figure>
            </div>
            <div className="slide-height mr-20 ml-20">
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src={carouselFive} alt="Creative Agency"/>
                    </a>
                </figure>
            </div>
            </Slider>
        </div>
    );
}
}