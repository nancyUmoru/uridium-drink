import Layout from "../Layout/Layout";
import Aboutus from "../components/AboutUs/About";
import Ourteam from "../components/AboutUs/Ourteam";
import Weare from "../components/AboutUs/Weare";


const About = () => {
    return (
        <Layout>
            <div>
                <Aboutus />
                <Weare />
                <Ourteam />
            </div>
        </Layout>
    )
};

export default About;