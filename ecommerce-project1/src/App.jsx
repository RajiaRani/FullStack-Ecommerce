import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Commonents/Header';

function App() {


  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    {/* <Route path="/" exact={true} element={<Home/>}/> */}
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
