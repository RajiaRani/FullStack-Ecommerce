import HomeBanner from "../../Commonents/HomeBanner";
import Button from '@mui/material/Button';
import { MdArrowRightAlt } from "react-icons/md";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';

export default function Home() {
    // var productSliderOptions = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     autoplay: true,
    // };

    return (
        <>
            <HomeBanner />

            <section className="homeProducts">
                <div className="">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src=" https://st4.depositphotos.com/1350793/20189/i/600/depositphotos_201892078-stock-photo-summer-sale-with-happy-young.jpg" className="cursor" />
                            </div>
                        </div>
                        <div className="col-md-9 row-Container">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0">BEST SELLERS</h3>
                                    <p className="text-light text-sm mb-0">Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className="View-All ms-auto">
                                    View All <MdArrowRightAlt />
                                </Button>

                            </div>


                            <div className="product_row w-100">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    Navigation={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="item productItem">
                                            <div className="imgWrapper">
                                                <img src="https://cdn.stocksnap.io/img-thumbs/280h/baby-clothes_Q2NLOOVQBU.jpg" className="w-100" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productItem">
                                            <div className="imgWrapper">
                                                <img src="https://cdn.stocksnap.io/img-thumbs/280h/sneakers-jeans_BRDLQ22VO4.jpg" className="w-100" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productItem">
                                            <div className="imgWrapper">
                                                <img src="https://cdn.stocksnap.io/img-thumbs/280h/sneakers-jeans_BRDLQ22VO4.jpg" className="w-100" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item productItem">
                                            <div className="imgWrapper">
                                                <img src="https://cdn.stocksnap.io/img-thumbs/280h/sneakers-jeans_BRDLQ22VO4.jpg" className="w-100" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
};