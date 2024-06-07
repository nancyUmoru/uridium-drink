import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Onboarding from "../pages/Onboarding";
import Product from "../pages/Product";


const RouteStore = () => {
    return (
        <Routes>
            <Route path="/" element={<Onboarding/>} />
            <Route path="product" element={<Product/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<ContactUs/>} />
            
        </Routes>
    )
};

export default RouteStore;