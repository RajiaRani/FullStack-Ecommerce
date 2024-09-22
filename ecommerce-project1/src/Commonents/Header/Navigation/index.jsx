import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from '@mui/material';
import { GoHome } from "react-icons/go";
import { useState } from 'react';

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
                            <div className={`sideNavbar ${isSideNavbarOpen===false ? "open" : " "}`}>
                            <ul>
                                <li><Link to="/" className="sidebar-link"><Button>Women</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button>Men</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button>Kids</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button>Beauty</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button>Gerocery</Button> </Link></li>
                                <li><Link to="/" className="sidebar-link"><Button>Mobiles</Button> </Link></li>
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