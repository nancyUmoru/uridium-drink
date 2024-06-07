import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Images/Navbar/Logo.svg";
import { Search } from 'lucide-react';


const NavBar = () => {
    const active = ({ isActive }) => (isActive ? "font-bold" : "font-normal").concat("text-white")
    return (
        <nav className="bg-black h-[20] py-2 px-10 flex justify-between items-center text-white sticky z-10 top-0">
            <div className="brand flex gap-32 items-center">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="w-[56.95px]" />
                </Link>
                <div>
                    <ul className="flex space-x-10 font-normal text-sm font-DM_Sans ">
                        <li>
                            <NavLink to="/product" className={ active  }>PRODUCT</NavLink>
                        </li>
                        <li>
                            <NavLink NavLink to="/about" className={ active }>ABOUT US</NavLink>
                        </li>
                        <li>
                            <NavLink NavLink to="/contact" className={ active }>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search className="w-4 h-4 text-black"/>
                    </div>
                    <input type="search" id="default-search" className="block w-[414px] bg-[#bab8b8] text-black p-2 ps-10 text-sm placeholder:text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                </div>
            </div>
        </nav>
    )
};

export default NavBar;