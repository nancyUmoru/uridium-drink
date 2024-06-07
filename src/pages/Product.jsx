import Layout from "../Layout/Layout";
import CocalH from "../components/LandingPage/CocalH";
import CocalS from "../components/LandingPage/CocalS";
import Exotic from "../components/LandingPage/Exotic";
import IWF from "../components/LandingPage/IWF.jsx";
import IWV from "../components/LandingPage/IWV.jsx";
import Webelive from "../components/LandingPage/Webelive.jsx";


const Product = () => {
    return (
        <Layout>
            <div>
                <Exotic />
                <Webelive />
                <IWF />
                <IWV />
                <CocalH />
                <CocalS />
            </div>
        </Layout>
    )
};

export default Product;