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
                        <img src=" https://st4.depositphotos.com/6923920/41187/i/380/depositphotos_411877204-stock-photo-fashion-sale-banner-design-template.jpg" alt="bannerImage" className="w-100" />
                    </div>
                    <div className="item">
                        <img src=" https://st4.depositphotos.com/6923920/41187/i/600/depositphotos_411877510-stock-photo-fashion-sale-banner-design-template.jpg" alt="bannerImage" className="w-100" />
                    </div>
                    <div className="item">
                        <img src="https://st4.depositphotos.com/6923920/41187/i/600/depositphotos_411877220-stock-photo-fashion-sale-banner-design-template.jpg " alt="bannerImage" className="w-100" />
                    </div>
                    <div className="item">
                        <img src="https://st4.depositphotos.com/6923920/41187/i/600/depositphotos_411876904-stock-photo-fashion-sale-banner-design-template.jpg" alt="bannerImage" className="w-100" />
                    </div>

                </Slider>
            </div>
        </>
    )
}