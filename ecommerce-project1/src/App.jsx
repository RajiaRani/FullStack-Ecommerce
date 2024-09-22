import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Commonents/Header';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import Home from './Pages/Home';


// 1st Create the MyContext
const MyContext = createContext();

function App() {
const [countryList, setCountryList] = useState([]);

// For after select the country
const [selectedCountry, setSelectedCountry] = useState(" ");

useEffect(() => {
  getCountry("https://countriesnow.space/api/v0.1/countries/");
}, [])

const getCountry = async(url) => {
const response = await axios.get(url).then((res) => {
  setCountryList(res.data.data)
  console.log(res.data.data)
})

}
const values = {
countryList,
setSelectedCountry,
selectedCountry

}
  return (
    <>
   <BrowserRouter>
   <MyContext.Provider value={values}>
   <Header/>
   <Home/>
   <Routes>
    {/* <Route path="/" exact={true} element={<Home/>}/>  */}
   </Routes>
   </MyContext.Provider>
   </BrowserRouter>

    </>
  )
}

export default App;
export  {MyContext};