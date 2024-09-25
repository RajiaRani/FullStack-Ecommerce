import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default function HomeBanner() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: true,
        autoplay:true,
    }
    return (
        <>
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg" className="w-100" />
                    </div>
                    <div className="item">
                        <img src=" https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg" alt="bannerImage" className="w-100" />
                    </div>
                    <div className="item">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg" alt="bannerImage" className="w-100" />
                    </div>
                    <div className="item">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg" alt="bannerImage" className="w-100" />
                    </div>

                </Slider>
            </div>
        </>
    )
}