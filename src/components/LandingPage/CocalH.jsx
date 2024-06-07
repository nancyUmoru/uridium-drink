import Cocal from "../../assets/Images/Landingpage/Cocal.svg";

const CocalH = () => {
  return (
    <div className="w-fit">
      <div className="flex">
        <div>
          <img src={Cocal} alt="Cocal" className="w-[697px]" />
        </div>
        <div className="bg-black text-white w-[815px] pt-20 pb-16 px-16 ">
          <h1 className="font-normal text-3xl font-Jockey_One">COCALERO CLASSICO </h1>
          <p className="font-medium text-xl pt-6 font-Hind">Herbal SPIRIT</p>
          <p className="font-normal text-2xl pt-11 font-Inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore <br />
            magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
            exercitation ullamco laboris nisi ut aliquip ex ea <br />
            commodo consequat. Duis aute irure dolor in <br />
            reprehenderit in voluptate velit esse cillum dolore eu <br />
            fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CocalH;
