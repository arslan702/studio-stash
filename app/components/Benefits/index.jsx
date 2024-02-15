import React from "react";
import financial from "../../../public/images/financial.png";
import transparency from "../../../public/images/transparency.png";
import growth from "../../../public/images/growth.png";
import lightBulb from "../../../public/images/Lightbulb.png";
import speed from "../../../public/images/speed.png";
import Image from "next/image";

const style = {
  background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)'
}

export default function Benifits() {
  return (
    <div>
      <div className=" md:max-w-full pb-10 bg-[#ffffff]">
        <div className=" text-center font-light text-[60px] py-5 ">
          BENEFITS
          <div class="flex justify-center">
            <div class="w-[196px] h-[3px]" style={style}></div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-between items-start gap-5  md:grid-cols-3 sm:grid-cols-2 grid:cols-1 m-14">

          <div className="homehead border-[1px] border-[#CEAD64] rounded-[25px] h-[301px] w-[232px]">
            <div className="flex flex-col justify-center items-center pt-5 ">
              <Image src={financial} alt="" className=" " />
              <center>
              <h4 className=" text-[33px] align-center mt-1" style={{lineHeight: '35px'}}>
                Financial freedom{" "}
              </h4>
              </center>
              <p className="text-center px-2 text-[14px] pt-3" style={{lineHeight: '28px'}}>
                Access a lump sum of cash to invest in yourself, your music, or
                anything you need.
              </p>
            </div>
          </div>
          <div className="homehead border-[1px] border-[#CEAD64] rounded-[25px] h-[301px] w-[232px]">
            <div className="flex flex-col justify-center items-center pt-5 ">
              <div className="h-[81px] w-[81px] rounded-[50%]" style={{background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)'}}>
                <center className="mt-4">
                  <Image src={lightBulb} alt="img"/>
                  </center>
              </div>
              <center>
              <h4 className=" text-[33px] align-center mt-1" style={{lineHeight: '35px'}}>
                Creative control{" "}
              </h4>
              </center>
              <p className="text-center px-2 text-[14px] pt-3" style={{lineHeight: '28px'}}>
                Choose which songs to sell and the percentage you keep. You stay in charge
              </p>
            </div>
          </div>
          <div className="homehead border-[1px] border-[#CEAD64] rounded-[25px] h-[301px] w-[232px]">
            <div className="flex flex-col justify-center items-center pt-5 ">
              <Image src={transparency} alt="" className=" " />
              <center>
              <h4 className=" text-[33px] align-center mt-1" style={{lineHeight: '35px'}}>
                Transparency{" "}
              </h4>
              </center>
              <p className="text-center px-2 text-[14px] pt-5" style={{lineHeight: '28px'}}>
                We use data-driven methods to craft fair offers, so you know exactly what your music is worth.
              </p>
            </div>
          </div>
          <div className="homehead border-[1px] border-[#CEAD64] rounded-[25px] h-[301px] w-[232px]">
            <div className="flex flex-col justify-center items-center pt-5 ">
            <div className="h-[81px] w-[81px] rounded-[50%]" style={{background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)'}}>
                <center className="mt-4">
                  <Image src={speed} alt="img"/>
                  </center>
              </div>
              <center>
              <h4 className=" text-[33px] align-center mt-1" style={{lineHeight: '35px'}}>
                Speed{" "}
              </h4>
              </center>
              <p className="text-center px-2 text-[14px] pt-3" style={{lineHeight: '28px'}}>
                Get paid quickly, no waiting months or years for streaming pennies.
              </p>
            </div>
          </div>
          <div className="homehead border-[1px] border-[#CEAD64] rounded-[25px] h-[301px] w-[232px]">
            <div className="flex flex-col justify-center items-center pt-5 ">
              <Image src={growth} alt="" className=" " />
              <center>
              <h4 className=" text-[33px] align-center mt-1" style={{lineHeight: '35px'}}>
                Growth{" "}
              </h4>
              </center>
              <p className="text-center px-2 text-[14px] pt-3" style={{lineHeight: '28px'}}>
                We’ll also invest capital into your song, helping to increase streams across your entire catalog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}