import Button from '@mui/material/Button';
import { MdArrowRightAlt } from "react-icons/md";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import ProductItem from "../../Commonents/ProductItem";
import sideBanner from "../../assets/side1.png";
import sideBanner2 from "../../assets/side2.png";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";

export default function ProductList() {
    const cardData1 = [
        {
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg",
            newPrice: "$11.99",
            oldPrice: "$13.99",
            discount: "28%"
        },
        {
            title: "USDA Choice Angus Beef Stew Meat",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg",
            newPrice: "$79.99",
            oldPrice: "$65.99",
            discount: "28%"
        },
        {
            title: "Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5-346x310.jpg",
            newPrice: "$29.00",
            oldPrice: "$25.00",
            discount: "28%"
        },
        {
            title: "Werther’s Original Caramel Hard Candies",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg",
            newPrice: "$20.00",
            oldPrice: "$14.97",
            discount: "28%"
        },
        {
            title: "All Natural Italian-Style Chicken Meatballs",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
            newPrice: "$24.37",
            oldPrice: "$19.00",
            discount: "25%"
        },

        {
            title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
            newPrice: "$9.37",
            oldPrice: "$6.34",
            discount: "28%"
        },
        {
            title: "Blue Diamond Almonds Lightly Salted",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg",
            newPrice: "$24.00",
            oldPrice: "$19.24",
            discount: "28%"
        },
        {
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            image: " https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg",
            newPrice: "$24.00",
            oldPrice: "$19.24",
            discount: "28%"
        },
        {
            title: "USDA Choice Angus Beef Stew Meat",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg",
            newPrice: "$24.00",
            oldPrice: "$19.24",
            discount: "28%"
        },
        {
            title: "Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5-346x310.jpg",
            newPrice: "$24.00",
            oldPrice: "$19.24",
            discount: "28%"
        }

    ];

    const cardData2 = [
        {
            title: "All Natural Italian-Style Chicken Meatballs",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
            newPrice: "$29.00",
            oldPrice: "$25.00",
            discount: "28%"
        },
        {
            title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn ",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg ",
            newPrice: "$4.29 ",
            oldPrice: "$3.29",
            discount: "28%"
        },
        {
            title: "Field Roast Chao Cheese Creamy Original",
            image: " https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
            newPrice: "$24.00",
            oldPrice: "$19.50 ",
            discount: "28%"
        },
        {
            title: "Blue Diamond Almonds Lightly Salted ",
            image: " https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg",
            newPrice: "$11.56 ",
            oldPrice: "$10.00 ",
            discount: "28%"
        },
        {
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg ",
            newPrice: "$13.99 ",
            oldPrice: "$11.99",
            discount: "28%"
        },
        {
            title: "Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar ",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5-346x310.jpg ",
            newPrice: "$29.00 ",
            oldPrice: "$25.00 ",
            discount: "28%"
        }, {
            title: "Werther’s Original Caramel Hard Candies ",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg ",
            newPrice: "$14.97 ",
            oldPrice: "$14.97 ",
            discount: "28%"
        }, {
            title: "All Natural Italian-Style Chicken Meatballs ",
            image: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg ",
            newPrice: "$9.35 ",
            oldPrice: "$7.35",
            discount: "28%"
        },
    ]
    return (
        <>
            <section className="homeProducts">
                <div className="">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={sideBanner} className="cursor" />
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

                                    {cardData1.map((data, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductItem
                                                title={data.title}
                                                oldPrice={data.oldPrice}
                                                newPrice={data.newPrice}
                                                discount={data.discount}
                                                image={data.image}
                                            />
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="homeProducts">
                <div className="">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={sideBanner2} className="cursor" />
                            </div>
                        </div>
                        <div className="col-md-9 row-Container">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0">New PRODUCTS</h3>
                                    <p className="text-light text-sm mb-0">New Products with updated Stocks.</p>
                                </div>
                                <Button className="View-All ms-auto">
                                    View All <MdArrowRightAlt />
                                </Button>

                            </div>


                            <div className="product_row  d-grid data2">

                                {cardData2.map((data, index) => (

                                    <ProductItem
                                        title={data.title}
                                        oldPrice={data.oldPrice}
                                        newPrice={data.newPrice}
                                        discount={data.discount}
                                        image={data.image}
                                    />

                                ))}


                            </div>
                            <div className="product_row mt-4">
                                <img src={banner1}  style={{width:"49%"}}/> &nbsp; &nbsp; 
                                <img src={banner2} style={{width:"49%"}} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>



        </>
    )
}