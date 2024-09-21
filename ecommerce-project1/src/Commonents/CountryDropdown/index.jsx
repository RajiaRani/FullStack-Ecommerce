import "../../App.css";
import React from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function CountryDropdown() {
    const [isOpenModal, setisOpenModal] = useState(false);
    

    return (
        <>
            <Button className="btn countryDropdown" onClick={ () => setisOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">India </span>
                </div>
                <span className="m-auto"><FaAngleDown /></span>
            </Button>


            <Dialog open={isOpenModal} 
            onClose={() => setisOpenModal(false)}
             className="locationModal"  
             TransitionComponent={Transition}>
                <h3>Choose your Delivery Location</h3>
                <p>Enter your address and we will specify the offer for your ares.</p>
                <Button className="close_" onClick={ () => setisOpenModal(false)}><IoMdClose/></Button>
                <div className="headerSearch ml-3 w-100">
                    <input type="text" placeholder="Search your area" />
                    <Button className="btn"><CiSearch /></Button>
                </div>


                <ul className="countryList mt-3">
                  <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Sri Lanka</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Uk</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Sri Lanka</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Uk</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Sri Lanka</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Uk</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Sri Lanka</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Uk</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Sri Lanka</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Uk</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Sri Lanka</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Uk</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Sri Lanka</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Uk</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Sri Lanka</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>Uk</Button></li>
                  <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
                </ul>
            </Dialog>
        </>
    )
}