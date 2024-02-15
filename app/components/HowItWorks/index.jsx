"use client";
import Image from "next/image";
import React, { useState } from "react";
import singer from "../../../public/images/singer.png";

function HowItWorks() {
  const [active, setActive] = useState(3);

  const gradientStyle = {
    background:
      "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "300",
    color: "transparent", // Fallback color for browsers that don't support text gradients
  };

  const gradientPopin = {
    background:
      "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "600",
    color: "transparent", // Fallback color for browsers that don't support text gradients
  };

  const notGradient = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "600"
  }

  const style = {
    background:
      "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)",
  };
  return (
    <div className="bg-[#000000] h-[auto] w-full">
      <div className="px-4 md:px-12 lg:px-20 py-8 md:py-20 lg:py-32">
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="flex flex-row justify-start items-center">
              <div className="h-[1px] w-[50px] bg-[#ffffff]"></div>
              <div
                className="homehead text-[22px] leading-[22px]"
                style={gradientStyle}
              >
                OUR MISSION
              </div>
            </div>
            <div className="homehead text-[46px] lg:text-[78px] leading-[46px] lg:leading-[78px] pt-4 md:pt-0 text-[#ffffff]">
              Break The Streaming Cycle
            </div>
          </div>
          <div className="homehead w-[90%] md:w-[53%] text-[24px] leading-[30px] text-[#ffffff] pt-12 md:pt-4">
            We believe musicians deserve financial freedom and creative control.
            StudioStash offers musicians a different pathway to monetization.
            It's your music and your decision. So sell as much or as little as
            you want, but always keep the percentage you deserve. 
          </div>
        </div>
      </div>
      <center>
        <div className="w-[88%] h-[1px] bg-[#FFFFFF78]"></div>
      </center>
      <div className=" md:max-w-full pb-16 md:pb-56 mt-16 md:mt-32">
        <div className="homehead text-center font-light text-[#ffffff] text-[46px] lg:text-[60px] py-5 ">
          How it Works
          <div className="flex justify-center">
            <div className="w-[196px] h-[3px]" style={style}></div>
          </div>
          <div className="text-[20px] leading-[30px] mt-5">
            Get started today by following our simple steps 
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto mt-8">
          <div className="bottom_bg relative w-[96%] md:w-[88%] h-[583px] md:h-[383px]">
            <div
              className="absolute flex flex-col md:flex-row justify-between top-[-3px] md:top-[260px] bottom-14 left-0 right-0 h-16" /* Adjust background and height styles accordingly */
            >
                <div className="h-[294px] w-[360px] md:w-[300px] lg:w-[383px] mt-4 px-3 rounded-[10px]" onClick={() => setActive(1)} style={{background : active == 1 ? "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)" : "#191919",boxShadow: '0px 3.7253634929656982px 23.283527374267578px 0px #0000000D'}}>
                    <div className="text-[40px] leading-[41px] pt-5 md:pt-10" style={active == 1 ? notGradient : gradientPopin}>Step 1</div>
                    <div className="amsi text-[24px] leading-[29px] mt-5" style={{color: active == 1 ? "#000000" : "#FFFFFFF0", fontWeight: '400'}}>Connect With Our Friendly Team</div>
                    <div className="homehead text-[16px] leading-[32px] mt-5" style={{color: active == 1 ? "#000000" : "#FFFFFF",fontFamily: 'Outfit'}}>Schedule a  call to discuss your music and goals.</div>
                </div>
                <div className="h-[294px] w-[360px] md:w-[300px] lg:w-[383px] mt-4 px-3 rounded-[10px]" onClick={() => setActive(2)} style={{background : active == 2 ? "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)" : "#191919", boxShadow: '0px 3.7253634929656982px 23.283527374267578px 0px #0000000D'}}>
                    <div className="text-[40px] leading-[41px] pt-5 md:pt-10" style={active == 2 ? notGradient : gradientPopin}>Step 2</div>
                    <div className="amsi text-[24px] leading-[29px] mt-5" style={{color: active == 2 ? "#000000" : "#FFFFFFF0",fontWeight: '400'}}>Get a personalized offer</div>
                    <div className="homehead text-[16px] leading-[32px] mt-5" style={{color: active == 2 ? "#000000" : "#FFFFFF",fontFamily: 'Outfit'}}>We analyze your data and present a transparent proposal based on your music's true value.</div>
                </div>
                <div className="h-[294px] w-[360px] md:w-[300px] lg:w-[383px] mt-4 px-3 rounded-[10px]" onClick={() => setActive(3)} style={{background : active == 3 ? "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)" : "#191919", boxShadow: '0px 3.7253634929656982px 23.283527374267578px 0px #0000000D'}}>
                    <div className="text-[40px] leading-[41px] pt-5 md:pt-10" style={active == 3 ? notGradient : gradientPopin}>Step 3</div>
                    <div className="amsi text-[24px] leading-[29px] mt-3 md:mt-5" style={{color: active == 3 ? "#000000" : "#FFFFFFF0",fontWeight: '400'}}>Sign the deal on your terms</div>
                    <div className="homehead text-[16px] leading-[32px] mt-3 md:mt-5" style={{color: active == 3 ? "#000000" : "#FFFFFF",fontFamily: 'Outfit'}}>Choose which tracks and percentages you want to sell. We handle the rest, and you get paid fast.</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto py-8 md:py-2 md:h-[536px] bg-[#ffffff]">
        <div className="w-[90%] md:w-[35%]">
            <div className="text-[32px] leading-[61px] text-[#3d3939]" style={{fontWeight: '700'}}>CASE STUDY</div>
            <div className="text-[16px] leading-[32px] text-[#696969]" style={{fontWeight: '400'}}>
                StudioStash gave me cash upfront for my song, made sure I maintained a percentage of my streaming royalties and my masters are still mine. Not to mention, I saw a 5x increase in monthly streams across my entire catalog after they reinvested into my song. I think it’s a dope option for artists.
            </div>
            <div className="text-[32px] leading-[61px] text-[#696969]">
                Kobenz
            </div>
        </div>
        <div className="w-[90%] md:w-[35%] flex justify-end items-end">
            <Image src={singer} alt="img" width={416} height={419}/>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
