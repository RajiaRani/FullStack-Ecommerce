import "../../App.css";
import {Link} from "react-router-dom";
import logo from "../../../src/assets/logo.jpg";
import CountryDropdown from "../CountryDropdown";
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation"

export default function Header(){
    return(
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="text-center mt-0 mb-0">
                        Due to the <b>COVID-19</b> epidemic, orders may be processes with a slight delay</p>
                </div>
            </div>


            <header className="header m-0">
                <div className="container">

                    <div className="row">
                        <div className="logoWrapper col-sm-2  d-flex align-items-center ">
                       <Link to="/"><img src={logo}/></Link>
                        </div>

                        <div className="col-sm-10 d-flex align-items-center part2">
                           <CountryDropdown/>

                          <SearchBox/>


                           <div className="part3 m-auto d-flex ">
                            <Button className="user-icon me-3"><FaUser /></Button>
                            <div className="m-auto cartTab d-flex align-items-center">
                               <span className="price ">$3.29</span>
                              <div className="position-relative ms-3">
                              <Button className="user-icon  bag"><BsBag /></Button>
                              <span className="count d-flex align-items-center justify-content-center">1</span>
                              </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </header>


            <Navigation/>
        </div>
        </>
    )
};