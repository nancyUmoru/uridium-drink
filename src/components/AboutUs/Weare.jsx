import johnson from "../../assets/Images/Aboutpage/johnson.svg";
import Emmanuel from "../../assets/Images/Aboutpage/Emmanuel .svg";
import Hands from "../../assets/Images/Aboutpage/Hands.svg";
import Good from "../../assets/Images/Aboutpage/Good.svg";
import safety from "../../assets/Images/Aboutpage/safety.svg";
import Okayhand from "../../assets/Images/Aboutpage/Okayhand.svg";
import "./stylingFiles.css"



const Weare = () => {
  return (
    <main>
      <div className="flex pb-20 ">
            <div className="px-10 h-[1229px] pt-9 about">
                <div>
                    <h1 className="font-bold text-[40px] font-Rubik">Who We Are</h1>
                    <p className="font-Inter font-normal text-base">
                    Lorem ipsum dolor sit amet consectetur. Hendrerit purus et diam
                    pretium. Convallis <br />
                    tellus morbi sed lectus et pharetra fames rutrum. Nisi leo
                    pulvinar proin sed tempor <br />
                    sed erat sed. Vulputate auctor vivamus amet in nulla gravida at.
                    Cursus magnis sit <br />
                    arcu semper purus integer tellus vivamus et. Adipiscing dignissim
                    potenti convallis <br />
                    ultricies. Venenatis nibh quis dui facilisis urna. Sapien quisque
                    orci dolor in nec. <br />
                    Euismod et posuere tellus velit eget condimentum. Amet morbi quis
                    non mi felis <br />
                    lectus. Adipiscing morbi aliquam id nisi ultrices diam pulvinar.
                    Neque volutpat lectus <br />
                    lectus nam et mauris.
                    </p>
                    <p className="font-Inter font-normal text-base pt-7">
                    Lorem ipsum dolor sit amet consectetur. Viverra sit id aliquam
                    dignissim <br />
                    commodo facilisis. Ullamcorper aliquam lectus tempus dignissim.
                    Quis et convallis <br />
                    faucibus tellus egestas dolor est praesent. Diam faucibus non sed
                    lectus sed nibh. <br />
                    Cursus pulvinar cras gravida semper nunc placerat sapien. Aliquam
                    nec non <br />
                    platea purus viverra dui sed potenti nulla. Aliquet mattis neque
                    odio egestas <br />
                    aliquet sit nullam nunc. Tellus sem eget.
                    </p>
                </div>
                <div className="py-24">
                    <h1 className="font-bold text-[40px] font-Rubik">As a Distributor</h1>
                    <p className="font-Inter font-normal text-base">
                    Lorem ipsum dolor sit amet consectetur. At a tincidunt elit
                    pharetra erat faucibus <br />
                    dolor tellus. Aliquet sit lobortis est venenatis adipiscing id ac
                    dignissim mollis. <br />
                    Massa at sapien eu pellentesque arcu tristique felis. Amet sit ut{" "}
                    <br />
                    sed in neque. Sit ut justo turpis id. Consequat eleifend porta
                    malesuada et dolor non purus sit ornare. <br />
                    Risus nibh.
                    </p>
                    <p className="font-Inter font-normal text-base pt-7">
                    Lorem ipsum dolor sit amet consectetur. Amet ultrices ornare
                    pretium arcu <br />
                    tellus. Duis velit lorem ultrices sed nunc vestibulum amet tempor
                    maecenas. Eu <br />
                    amet donec sagittis pretium etiam commodo senectus. Mauris et
                    lorem lorem urna <br />
                    felis eu augue.
                    </p>
                </div>
            </div>

            <div className="w-[487.px] px-10 space-y-6">
                <div className="flex gap-6 pt-10 ">
                   <div className="relative">
                     <img src={johnson} alt="johnson" className="h-[260px] w-[228px]"  />
                     <div className="absolute bottom-5 left-2 px-1">
                        <h1 className="font-bold text-base text-white">JOHNSON ADEWUSI</h1>
                        <p className="font-extrabold text-sm text-white ">CEO, Co-Founder</p>
                     </div>
                   </div>
                   <div className="relative">
                     <img src={Emmanuel} alt="Emmanuel" className="h-[260px] w-[228px]" />
                     <div className="absolute bottom-5 left-2 px-1.5">
                        <h1 className="font-bold text-base text-white">EMMANUEL ODIBOH</h1>
                        <p className="font-extrabold text-sm text-white ">C.O.O </p>
                     </div>
                   </div>
                </div>

                <div className=" h-[939px] w-[487px] px-10 bg-black rounded-3xl pt-9">
                    <div className="text-center pb-7 border-b-2">
                        <div className="w-fit mx-auto">
                            <img src={Hands} alt="" className="h-[40px] w-[40px] " />
                        </div>
                        <div className="text-white">
                            <h1 className="font-bold text-lg pt-5 font-DM_Sans">Trustworthy</h1>
                            <p className="font-normal text-[15px] pt-3 font-Inter">Lorem ipsum dolor sit amet consectetur. Fermentum <br />nunc gravida in id nec cum pretium. Ac nisl habitasse <br />auctor massa feugiat turpis dignissim ullamcorper.</p>
                        </div>
                    </div>
                    <div className="text-center py-7 border-b-2">
                        <div className="w-fit mx-auto">
                            <img src={Good} alt="" className="h-[40px] w-[40px] " />
                        </div>
                        <div className="text-white">
                            <h1 className="font-bold text-lg pt-5 font-DM_Sans">Accessible</h1>
                            <p className="font-normal text-[15px] pt-3 font-Inter">Lorem ipsum dolor sit amet consectetur. Egestas <br />tortor quis tincidunt pharetra. Vitae sed pulvinar velit <br />ullamcorper massa ut. Congue mauris molestie.</p>
                        </div>
                    </div>
                    <div className="text-center py-7 border-b-2 " >
                        <div className="w-fit mx-auto">
                            <img src={safety} alt="" className="h-[40px] w-[40px] " />
                        </div>
                        <div className="text-white">
                            <h1 className="font-bold text-lg pt-5 font-DM_Sans">Durable</h1>
                            <p className="font-normal text-[15px] pt-3 font-Inter">Lorem ipsum dolor sit amet consectetur. Quis dis <br />maecenas elementum quis mauris felis. Quis tellus <br />urna non vel duis nam sed imperdiet. Sem vitae.</p>
                        </div>
                    </div>
                    <div className="text-center py-7">
                        <div className="w-fit mx-auto">
                            <img src={Okayhand} alt="" className="h-[40px] w-[40px] " />
                        </div>
                        <div className="text-white">
                            <h1 className="font-bold text-lg pt-5 font-DM_Sans">Classic</h1>
                            <p className="font-normal text-[15px] pt-3 font-Inter">Lorem ipsum dolor sit amet consectetur. Tristique <br />gravida scelerisque ornare vestibulum. Turpis mi <br />mauris et tempus egestas tempus sed lorem ut.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </main>
  );
};

export default Weare;
