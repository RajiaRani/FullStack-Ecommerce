import HomeBanner from "../../Commonents/HomeBanner";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import ProductList from "../../Commonents/ProductList";
import HomeCat from "../../Commonents/HomeCat";
import coupon from "../../assets/coupon.png";
import { CiMail } from "react-icons/ci";
import { Button } from "@mui/material";
import Footer from "../../Commonents/Footer";

export default function Home() {
   
    return (
        <>
            <div className="container">
                <HomeBanner />
                <ProductList/>
                <HomeCat/>
            </div>
            <section className="newsLetterSection  w-100">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6">
                              <p className="text-light">$20 discount for your first order</p>
                              <h3>Join our newsletter and get...</h3>
                              <p>Join our email subscription now to get updates <br/> on promotions and coupons.</p>

                              <form action="">
                                <CiMail />
                                <input type="text" placeholder=" Your email address" />
                                <Button>Subscribe</Button>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <img src={coupon} />
                            </div>
                        </div>
                    </div>
            </section>
           
           <Footer/>
        </>
    )
};