import { IoMdClose } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import banner from "../../assets/banner1.png";
import { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/style.css';



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
                </div>
                <div className="col-md-7">
                    {/* Add additional product details here */}
                </div>
            </div>
        </Dialog>
    );
}
