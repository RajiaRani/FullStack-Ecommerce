import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HomeCat() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow:5,
        slidesToScroll:5,
        arrows: true,
        autoplay:true,
    }
    return (
        
        <>
            <section className="homeCat cursor">
                <div className="container">
                <Slider {...settings}>
                   
                        <div className="item text-center">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/baverages-1.jpg" />
                            <h6>Beverages</h6>
                        </div>
                    
                        <div className="item text-center">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg" />
                            <h6>Biscuits & Snacks</h6>
                        </div>
                        <div className="item text-center">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/breadbakery-1.jpg " />
                            <h6>Breads & Bakery </h6>
                        </div>
                        
                        <div className="item text-center">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/dairy-1.jpg " />
                            <h6>Breakfast & Dairy </h6>
                        </div>
              
                        <div className="item text-center">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png" />
                            <h6>Frozen Foods</h6>
                        </div>
                   
                        <div className="item text-center">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/fruitvegetables-1.jpg" />
                            <h6>Fruits & Vegetables </h6>
                        </div>
                  
                        <div className="item text-center">
                            <img src=" https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image2.png" />
                            <h6>Grocery & Staples </h6>
                        </div>
                    
                        <div className="item text-center">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/household-1.jpg " />
                            <h6> Household Needs</h6>
                        </div>
                    
                        <div className="item text-center">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/meat-1.jpg " />
                            <h6>Meats & Seafood</h6>
                        </div>
                    

                    </Slider>
            </div>
        </section >
        </>
    )
}