"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "../../public/images/headerLogo.png";
import BigLogo from "../../public/images/biglogo.png";
import DarkLogo from "../../public/images/darkLogo.png";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import Footer from "../components/footer";

function Contact() {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };
  
  return (
    <div>
    <div className={`bg-[#000000] h-auto relative pl:8 lg:pl-32 pb-20`}>
      <div className={`fixed top-0 left-0 right-0 bg-[#000000] z-[1]`}>
        <div className={`flex flex-row justify-between`}>
          <div className="pt-3 lg:pt-6 pl-2 md:pl-8 lg:pl-32">
            <Image src={HeaderLogo} alt="logo" height={84} width={207} />
          </div>
          <div className="hidden md:flex flex-row justify-between items-center pt-4 mr-32">
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
          <div
            onClick={handleNavbar}
            className="block md:hidden sm:block items-center cursor-pointer z-50 pt-8 mr-10"
          >
            {nav ? (
              <AiOutlineClose size={30} className="text-[#CEAD64] " />
            ) : (
              <CgMenuRightAlt size={30} className="text-[#CEAD64] " />
            )}
          </div>
          <div
            className={
              nav
                ? "lg:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-linear duration-300 z-40"
                : "lg:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-linear duration-300 z-400"
            }
          >
            <ul className="flex flex-col gap-6">
                <li
                  className="menu-item"
                  style={{
                    fontWeight: "600",
                    color: "#808285",
                    fontFamily: "'Lato', sans-serif",
                  }}
                  onClick={() => router.push('/')}
                >
                  HOME
                </li>
                  <li
                    className="menu-item cursor-pointer"
                    style={{
                      fontWeight: "600",
                      color: "#808285",
                      fontFamily: "'Lato', sans-serif",
                    }}
                    onClick={() => router.push('/')}
                  >
                    BENEFITS
                  </li>
                <li
                  className="menu-item"
                  style={{
                    fontWeight: "600",
                    color: "#808285",
                    fontFamily: "'Lato', sans-serif",
                  }}
                  onClick={() => router.push('/')}
                >
                  CONTACT US
                </li>
                <li
                  className="menu-item cursor-pointer"
                  style={{
                    fontWeight: "600",
                    color: "#808285",
                    fontFamily: "'Lato', sans-serif",
                  }}
                  onClick={() => router.push('/')}
                >
                    HOW IT WORK
                </li>
                <div className='h-[45px] w-[148px] rounded-[42px] text-[#000000] pt-[10px] cursor-pointer' onClick={() => router.push('/contact')} style={{background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)'}}>
                  <center>CONTACT</center>
                </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around pt-32 md:pt-64">
        <div className="flex flex-col w-[360px] md:w-[400px] lg:w-[552px] h-[550px] relative">
          <div className="homehead text-[50px] lg:text-[77px] leading-[60px] lg:leading-[85px] text-[#ffffff] mb-2 mt-0 z-1">
            Unlock The Bag
          </div>
          <Image
            src={BigLogo}
            width={385}
            height={308}
            alt="img"
            className="flex ml-0 md:ml-8 lg:ml-34 absolute top-[170px] flipped-image"
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
                <div className="">
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
