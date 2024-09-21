import "../../App.css";
import React, { useContext, useEffect } from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CountryDropdown() {
    const context = useContext(MyContext);
    // Country drop down ko open and close  karne ke liye
    const [isOpenModal, setisOpenModal] = useState(false);

    // Country list index and selected index dono match hai ya nhi active show karne ke liye
    const [selectedTab, setSelectedTab] = useState(null);
    const selectCountry = (index, country) => {
        setSelectedTab(index);
        setisOpenModal(false);
        context.setSelectedCountry(country);
    };

    // Country ko name se find karne ke liye (filter)
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        setCountryList(context.countryList)
    }, []);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword !== "") {
            const filteredList = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            })
            setCountryList(filteredList);
        }else{
            setCountryList(context.countryList);
        }

    }


    return (
        <>
            <Button className="btn countryDropdown" onClick={() => setisOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name"> { context.selectedCountry !==" " ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+ "..": context.selectedCountry : "Select a Location"}</span>
                </div>
                <span className="m-auto"><FaAngleDown /></span>
            </Button>


         {/* // Using UI material Dialog */}
            <Dialog open={isOpenModal}
                onClose={() => setisOpenModal(false)}
                className="locationModal"
                TransitionComponent={Transition}>
                <h3>Choose your Delivery Location</h3>
                <p>Enter your address and we will specify the offer for your ares.</p>
                <Button className="close_" onClick={() => setisOpenModal(false)}><IoMdClose /></Button>
                <div className="headerSearch ml-3 w-100">
                    <input type="text" placeholder="Search your area" onChange={filterList} />
                    <Button className="btn"><CiSearch /></Button>
                </div>
                <ul className="countryList mt-3">
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                                    className={`${selectedTab === index ? "active" : " "}`}>{item.country}</Button></li>
                            )
                        })
                    }

                </ul>
            </Dialog>
        </>
    )
}