import { SlSizeFullscreen } from "react-icons/sl";
import Rating from '@mui/material/Rating';//Material UI
import { Button } from "@mui/material";
import { CiHeart } from "react-icons/ci";

export default function ProductItem({title,discount,image,newPrice,oldPrice}) {
    return (
        <div className="item productItem cursor">
            <div className="imgWrapper">
                <img src={image} className="w-100" alt={title}/>
                <span className="badge bg-primary">{discount}</span>
                <div className="actions">
                    <Button><SlSizeFullscreen/></Button>
                    <Button><CiHeart style={{fontSize:"20px"}} /></Button>
                </div>
            </div>
            <div className="info">
                <h4>{title}</h4>
                <span className="text-success">In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                <div className="d-flex">
                    <span className="oldPrice">{oldPrice}</span>
                    <span className="newPrice text-danger ms-2">{newPrice}</span>
                </div>
            </div>
        </div>
    );
}