import blood from "../../assets/Images/Productpage/blood.svg";
import heart from "../../assets/Images/Productpage/heart.svg";
import healthelife from "../../assets/Images/Productpage/healthelife.svg";
import brain from "../../assets/Images/Productpage/brain.svg";
import "./style.css"


const Webelive = () => {
    return (
        <div className="border bg-white h-[362px] ">

            {/* <div className="flex justify-between">
                <div className=" border h-[254px] w-[307px] ">
                    <img src={Scale} alt="Scale" />
                </div>
                <div>
                    <img src={Pourdrink} alt="Pourdrink" />
                </div>
            </div> */}
            
            <div className="flex gap-20 justify-center pt-10 water scale ">

                <div className=" border ">
                    <p className="font-Inknut_Antiqua font-medium text-[25px] ">We believe that</p>
                </div>

                <div className=" border ">
                    <div className="flex gap-2">
                        <div>
                            <img src={blood} alt="blood" className="w-[33.49px] h-[33.49px] " />
                        </div>
                        <div>
                            <p className="font-Inria_Sans font-normal text-2xl">Whiskey reduces your blood pressure and it is against bad cholesterol and blood clots</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <img src={heart} alt="heart" className="w-[33.49px] h-[33.49px] " />
                        </div>
                        <div>
                            <p className="font-Inria_Sans font-normal text-2xl">lower the risk of stroke or heart attack.</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <img src={healthelife} alt="healthelife" className="w-[33.49px] h-[33.49px] " />
                        </div>
                        <div>
                            <p className="font-Inria_Sans font-normal text-2xl">Lengthens your life.</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <img src={brain} alt="brain" className="w-[33.49px] h-[33.49px] " />
                        </div>
                        <div>
                            <p className="font-Inria_Sans font-normal text-2xl">Improves memory.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Webelive;