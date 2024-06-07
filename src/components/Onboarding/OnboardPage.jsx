import Unsplash from "../../assets/Images/Landingpage/Unsplash.svg";
import East from "../../assets/Images/Landingpage/East.svg";


const OnboardPage = () => {
    return(
        <main>
            <div className="flex bg-black w-full px-20 h-screen  ">
                <div className="relative w-1/2 ">
                    <img src={Unsplash} alt="Unsplash" className=" absolute z-0" />
                    <img src={East} alt="East" className=" top-[9.5rem] left-[16.5rem] z-9 w-[170px] absolute  mx-auto" />
                </div>

                <div className="w-1/2 grid place-content-center">
                    <div className="">
                        <div>
                            <h1 className="font-black text-[33px] text-white font-Inter ">Please verify your age</h1>
                        </div>
                        <div className="flex gap-7 pt-5">
                            <div>
                                <button type="button" className="px-4 font-Inter py-2 text-[15.75px] w-[170px] font-bold focus:z-10 focus:ring-1 bg-white border  hover:bg-gray-500 hover:text-gray-900 rounded-[4px] ">I'm 18 or Older</button>
                            </div>
                            <div>  
                                <button type="button" className="px-4 font-Inter py-2 text-[15.75px] w-[170px] font-bold focus:z-10 focus:ring-1  bg-[#A10000] text-white border  hover:bg-[#A10000] hover:text-gray-900 rounded-[4px] ">I'm under 18</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default OnboardPage;