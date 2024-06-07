import Footer from "../components/LandingPage/Footer";
import NavBar from "../components/NavBar/Navbar";

const Layout = ({children}) => {
    return (
        <main>
            <NavBar />
            <div className="">{children}</div>
            <Footer />
        </main>
    )
};

export default Layout;