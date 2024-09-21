import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';

export default function SearchBox() {
    return (
        <>
            <div className="headerSearch ms-3">
                <input type="text" placeholder="Search Products" />
                <Button className="btn"><CiSearch /></Button>
            </div>
        </>
    )
};