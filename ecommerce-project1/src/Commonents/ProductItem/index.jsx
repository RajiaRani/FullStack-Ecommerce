import { SlSizeFullscreen } from "react-icons/sl";
import Rating from '@mui/material/Rating';//Material UI
import { Button } from "@mui/material";
import { CiHeart } from "react-icons/ci";

export default function ProductItem() {
    return (
        <>
            <div className="item productItem cursor">
                <div className="imgWrapper">
                    <img src="https://cdn.stocksnap.io/img-thumbs/280h/baby-clothes_Q2NLOOVQBU.jpg" className="w-100" />
                    <span className="badge bg-primary">28%</span>
                    <div className="actions">
                        <Button>< SlSizeFullscreen/></Button>
                        <Button><CiHeart style={{fontSize:"20px"}} /></Button>
                    </div>
                </div>
                <div className="info">
                    <h4>Pure Cottan and stylish kid's clothes</h4>
                    <span className="text-success">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="newPrice text-danger ms-2">$14.00</span>
                    </div>
                </div>
            </div>
        </>
    )
}