import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from '@mui/material';
import { GoHome } from "react-icons/go";
import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiApple } from "react-icons/ci";
import { GiChickenOven } from "react-icons/gi";
import { MdOutlineEgg } from "react-icons/md";
import { PiCoffeeThin } from "react-icons/pi";
import { PiCookieThin } from "react-icons/pi";
import { PiBreadThin } from "react-icons/pi";
import { BiFoodTag } from "react-icons/bi";


export default function Navigation() {
    const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(true);

    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 navPart1">
                            <div className="allCatTabWrapper">
                            <Button className="allCatTab d-flex align-items-center" 
                            onClick={() => setIsSideNavbarOpen(!isSideNavbarOpen)}>
                                <span className="icon1 me-3"> <IoIosMenu /></span>
                                <span className="text">All Catagories</span>
                                <span className="icon2 ms-3"><FaAngleDown /></span>
                            </Button>
                            <div className={`sideNavbar ${isSideNavbarOpen===true ? "open" : " "}`}>
                            <ul>
                                <li><Link to="/" className="sidebar-link"> <Button> <CiApple /> Fruits & Vegitables< MdKeyboardArrowRight className="ms-auto"/></Button> </Link>
                                <div className="submenu ">
                                        <Link to="/" className="sub-link"><Button> Cuts & Sprouts</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Exotic Fruits & Veggies</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Fresh Fruits</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Fresh Vegetables</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Herbs & Seasonings</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Packaged Produce</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Party Trays</Button> </Link>
                                    </div>
                                </li>
                                <li><Link to="/" className="sidebar-link"><Button><GiChickenOven/> Meats & Seafood</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button>< MdOutlineEgg/> Breakfasts & Diary</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button>< PiCoffeeThin/> Beverage < MdKeyboardArrowRight className="ms-auto"/></Button> </Link>
                                <div className="submenu">
                                       <Link to="/" className="sub-link"><Button>Coffee</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Craft Beer</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Drink Boxes & Pouches</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Milk & Plant-Based Milk</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Soda & Pop</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Sparkling Water</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Tea & Kombucha</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Water</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Wine</Button> </Link>
                                </div>
                                </li>
                                <li><Link to="/" className="sidebar-link"><Button><PiBreadThin/> Breads & Beakery</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button><PiCookieThin /> Biscuits & Snacks</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button><BiFoodTag/> Grocery & Staples</Button> </Link></li>
                            </ul>
                            </div>
                            </div>

                        </div>

                        <div className="col-sm-10 navPart2 d-flex align-items-center">
                            <ul className="list list-inline w-100">
                                <li className="list-inline-item"> <Link to="/" className="link"> <GoHome /> Home</Link></li>
                                <li className="list-inline-item"> <Link to="/" className="link">Fashion</Link>
                                    <div className="submenu shadow">
                                        <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>men</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>kid</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                    </div>
                                </li>
                                <li className="list-inline-item"> <Link to="/" className="link">Electronic</Link>
                                    <div className="submenu shadow">
                                        <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>men</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>kid</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                    </div>
                                </li>
                                <li className="list-inline-item"> <Link to="/" className="link">Grocery</Link><div className="submenu shadow">
                                    <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                    <Link to="/" className="sub-link"><Button>men</Button> </Link>
                                    <Link to="/" className="sub-link"><Button>kid</Button> </Link>
                                    <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                </div></li>
                                <li className="list-inline-item"> <Link to="/" className="link">Bakery</Link>
                                    <div className="submenu shadow">
                                        <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>men</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>kid</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                    </div>
                                </li>
                                <li className="list-inline-item"> <Link to="/" className="link">Makeup</Link>
                                    <div className="submenu shadow">
                                        <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>men</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>kid</Button> </Link>
                                        <Link to="/" className="sub-link"><Button>Women</Button> </Link>
                                    </div>
                                </li>
                                <li className="list-inline-item"> <Link to="/" className="link">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};