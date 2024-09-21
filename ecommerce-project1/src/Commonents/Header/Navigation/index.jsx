import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from '@mui/material';
import { GoHome } from "react-icons/go";

export default function Navigation(){
    return(
        <>
        <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 navPart1">
                            <Button className="allCatTab d-flex align-items-center">
                                <span className="icon1 me-3"> <IoIosMenu /></span>
                                <span className="text">All Catagories</span>
                                <span className="icon2 ms-3"><FaAngleDown /></span>
                            </Button>
 
                        </div>

                        <div className="col-sm-10 navPart2 d-flex align-items-center">
                           <ul className="list list-inline w-100">
                            <li className="list-inline-item"> <Link to="/" className="link"> <GoHome /> Home</Link></li>
                            <li className="list-inline-item"> <Link to="/" className="link">Fashion</Link></li>
                            <li className="list-inline-item"> <Link to="/" className="link">Electronic</Link></li>
                            <li className="list-inline-item"> <Link to="/" className="link">Grocery</Link></li>
                            <li className="list-inline-item"> <Link to="/" className="link">Bakery</Link></li>
                            <li className="list-inline-item"> <Link to="/" className="link">Makeup</Link></li>
                            <li className="list-inline-item"> <Link to="/" className="link">Contact Us</Link></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};