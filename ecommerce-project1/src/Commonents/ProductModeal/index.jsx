import { IoMdClose } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import banner from "../../assets/banner1.png";
import { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";




export default function ProductModal(props) {
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    var settings2 = {
        dots: false,
        infinite: false, // Fixed spelling
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    return (
        <Dialog open={true} className="productModal" onClose={() => props.closeProductModal()}>
            <Button className="close_" onClick={() => props.closeProductModal()}>
                <IoMdClose />
            </Button>
            <h4 className="font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
            <div className="d-flex align-items-center">
                <span>Brands:</span>
                <span className="ml-2"><b>Welch's</b></span>
                <Rating name="read-only" value={4} readOnly size="small" precision={0.5} />
            </div>

            <hr />

            <div className="row mt-2">
                <div className="col-md-5">
                    <div className="productZoom">
                        <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                            <div className="item">
                                <InnerImageZoom src={banner} zoomType="hover" zoomScale={1} />
                            </div>
                        </Slider>
                    </div>

                    <Slider {...settings2} className="zoomSlider" ref={zoomSlider}>
                        {
                            currentProduct.productImages !== undefined &&
                            currentProduct.productImages.map((imgUrl, index) => {
                                return(
                                    <div className="item">
                                        <img src={`{imgUrl}?im=Resize=($smallImageSize[0], $(smallImageSize[1]))`} className="w-100"  onClick={() => goto(index)}/>
                                    </div>
                                )
                            })
                        }

                    </Slider>
                </div>
                <div className="col-md-7">
                    {/* Add additional product details here */}
                </div>
            </div>
        </Dialog>
    );
}
