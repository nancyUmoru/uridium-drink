import Drive from "../../assets/Images/Navbar/Drive.svg";
import instagram from "../../assets/Images/Navbar/facebook.svg";
import facebook from "../../assets/Images/Navbar/instagram.svg";
import twitter from "../../assets/Images/Navbar/twitter.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  const active = ({ isActive }) =>
    (isActive ? "font-bold" : "font-normal").concat("text-white");
  return (
    <footer className="bg-[#0D0D0E] h-[480px] px-11 pt-20 pb-20 flex justify-between text-white">
      <div>
        <ul>
            <li>
                <img src={Drive} alt="Drive" className="w-[84px] h-[96px] " />
            </li>
            <li>
                <p className="font-normal text-sm pt-6 font-DM_Sans">
                Lorem ipsum dolor sit amet consectetur. Nullam dui sed <br />
                enim massa et aenean augue nulla. Urna leo egestas in elit. <br />
                Gravida quam quam tortor adipiscing nunc dictum sed. Id <br />
                lorem elementum quam eget dignissim dui fusce. Odio <br />
                faucibus eget tellus ut cursus. Tortor consectetur.
                </p>
            </li>
        </ul>
      </div>

      <div>
          <h2 className='mb-4 text-lg font-medium dark:text-white font-DM_Sans'>Company</h2>
            <ul className="mb-4 text-sm">
                <li className="mb-4 text-base font-DM_Sans" ><a href="#"></a>About Us</li>
                <li className="mb-4 text-base font-DM_Sans" ><a href="#"></a>FAQ</li>
                <li className="mb-4 text-base font-DM_Sans" ><a href="#"></a>Privacy Policy</li>
                <li className="mb-4 text-base font-DM_Sans" ><a href="#"></a>Licence Agreement</li>
                <li className="mb-4 text-base font-DM_Sans" ><a href="#"></a>Terms & Conditions</li>
            </ul>
      </div>

       <div>
            <h2 className='mb-4 text-lg font-medium dark:text-white font-DM_Sans'>Connect with us</h2>
            <ul>
                <li className="mb-4 text-base font-DM_Sans"><a href="#"></a>Email: uridiumdelightbeverages@gmail.com</li>
                <li className="mb-4 text-base font-DM_Sans"><a href="#"></a>Phone: 0813 001 2222</li>
                <li className="mb-4 text-base font-medium pt-8 font-DM_Sans"><a href="#"></a> Office Address</li>
                <li className="mb-4 text-base font-DM_Sans"><a href="#"></a> 1st floor #8, Right Wing, 13 Rasheed Alaba Williams <br />Street, Lekki Phase 1, Lagos</li>
            </ul>
       </div>

      <div>
            <h2 className="mb-4 text-base font-medium font-DM_Sans">Follow us on</h2>
            <div className="flex gap-5">
                <Link to="/"><img src={instagram} alt="instagram" /></Link>
                <Link to="/"><img src={facebook} alt="facebook" /></Link>
                <Link to="/"><img src={twitter} alt="twitter" /></Link>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
