"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "../../public/images/headerLogo.png";
import BigLogo from "../../public/images/biglogo.png";
import DarkLogo from "../../public/images/darkLogo.png";
import React from "react";
import Footer from "../components/footer";

function Contact() {
  const router = useRouter();
  return (
    <div>
    <div className={`bg-[#000000] h-auto relative pl:8 lg:pl-32 pb-20`}>
      <div className={`fixed top-0 left-0 right-0 bg-[#000000] z-[1]`}>
        <div className={`flex flex-row justify-between`}>
          <div className="pt-6 pl-32">
            <Image src={HeaderLogo} alt="logo" height={84} width={207} />
          </div>
          <div className="flex flex-row justify-between items-center pt-4 mr-32">
            <div
              className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer"
              onClick={() => router.push("/")}
            >
              HOME
            </div>
            <div
              className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer"
              onClick={() => router.push("/")}
            >
              BENEFITS
            </div>
            <div
              className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              CONTACT US
            </div>
            <div
              className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer"
              onClick={() => router.push("/")}
            >
              HOW IT WORK
            </div>
            <div
              className="h-[45px] w-[148px] rounded-[42px] text-[#000000] pt-[10px] cursor-pointer ml-5"
              onClick={() => router.push("/contact")}
              style={{
                background:
                  "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)",
              }}
            >
              <center>CONTACT</center>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around pt-32 md:pt-64">
        <div className="flex flex-col w-[360px] md:w-[400px] lg:w-[512px] h-[550px] relative">
          <div className="homehead text-[65px] lg:text-[96px] leading-[70px] lg:leading-[105px] text-[#ffffff] mt-16 z-1">
            Unlock The Bag
          </div>
          <Image
            src={BigLogo}
            width={385}
            height={308}
            alt="img"
            className="flex ml-0 md:ml-8 lg:ml-52 absolute top-[220px]"
          />
        </div>

        <div className="h-[550px] w-[350px] md:w-[380px] lg:w-[492px] bg-[#ffffff] rounded-[10px] p-5 md:p-6">
              <div className="w-full">
                <div>
                    <label className="text-[16px] leading-[16px] text-[#777777]" style={{fontWeight: '500'}}>Name<span className="text-[#ab8124]">*</span></label>
                    <input className="w-[310px] md:w-[330px] lg:w-[441px] h-[50px] border-[1px solid #0000001F] rounded-[5px]" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),linear-gradient(0deg, rgba(175, 175, 175, 0.2), rgba(175, 175, 175, 0.2))'}}/>
                </div>
                <div className="mt-6">
                    <label className="text-[16px] leading-[16px] text-[#777777]" style={{fontWeight: '500'}}>Artist Spotify URL<span className="text-[#ab8124]">*</span></label>
                    <input className="w-[310px] md:w-[330px] lg:w-[441px] h-[50px] border-[1px solid #0000001F] rounded-[5px]" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),linear-gradient(0deg, rgba(175, 175, 175, 0.2), rgba(175, 175, 175, 0.2))'}}/>
                </div>
                <div className="flex flex-row mt-6">
                <div>
                    <label className="text-[16px] leading-[16px] text-[#777777]" style={{fontWeight: '500'}}>Email<span className="text-[#ab8124]">*</span></label>
                    <input className="w-[147px] md:w-[157px] lg:w-[213px] h-[50px] border-[1px solid #0000001F] rounded-[5px]" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),linear-gradient(0deg, rgba(175, 175, 175, 0.2), rgba(175, 175, 175, 0.2))'}}/>
                </div>
                <div className="ml-4">
                    <label className="text-[16px] leading-[16px] text-[#777777]" style={{fontWeight: '500'}}>Phone Number</label>
                    <input className="w-[147px] md:w-[157px] lg:w-[213px] h-[50px] border-[1px solid #0000001F] rounded-[5px]" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),linear-gradient(0deg, rgba(175, 175, 175, 0.2), rgba(175, 175, 175, 0.2))'}}/>
                </div>
                </div>
                <div className="mt-6">
                    <label className="text-[16px] leading-[16px] text-[#777777]" style={{fontWeight: '500'}}>What can we help you with?</label>
                    <input className="w-[310px] md:w-[330px] lg:w-[441px] h-[87px] border-[1px solid #0000001F] rounded-[5px]" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),linear-gradient(0deg, rgba(175, 175, 175, 0.2), rgba(175, 175, 175, 0.2))'}}/>
                </div>
                <div className="w-full h-[50px] rounded-[6px] mt-6" style={{background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)'}}>
                <center className="pt-3">Submit</center>
                </div>
              </div>
        </div>
      </div>
    </div>
    <Footer bg='#ffffff' logo={DarkLogo}/>
    </div>
  );
}

export default Contact;
