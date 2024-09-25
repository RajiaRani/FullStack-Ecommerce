import HomeBanner from "../../Commonents/HomeBanner";
import Button from '@mui/material/Button';
import { MdArrowRightAlt } from "react-icons/md";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import ProductItem from "../../Commonents/ProductItem";


export default function Home() {

    return (

        <>
          <div className="container">
          <HomeBanner />
            <section className="homeProducts">
                <div className="">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" className="cursor" />
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


                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    modules={[Navigation]}
                                    autoplay={true}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                       <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <ProductItem/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
          </div>
        </>
    )
};