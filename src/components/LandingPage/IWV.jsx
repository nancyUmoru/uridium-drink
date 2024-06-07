import BeFunky from "../../assets/Images/Landingpage/BeFunky.svg";

const IWV = () => {
  return (
    <div className="w-fit">
      <div className="flex flex-row-reverse">
        <div>
          <img src={BeFunky} alt="BeFunky" className="w-[697px]" />
        </div>
        <div className="bg-white text-black w-[815px] pt-20 pb-16 px-16 ">
          <h1 className="font-normal text-3xl font-Jockey_One ">IRISH WHISKEY VINTAGE </h1>
          <p className="font-medium text-xl pt-5 font-Hind">SINGLE GRAIN</p>
          <p className="font-normal text-2xl pt-11 font-Inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua. Ut enim ad minim veniam, quis <br />
            nostrud exercitation ullamco laboris nisi ut aliquip ex <br />
            ea commodo consequat. Duis aute irure dolor in <br />
            reprehenderit in voluptate velit esse cillum dolore eu <br />
            fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IWV;
