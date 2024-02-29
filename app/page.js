"use client";
import Image from "next/image";
import smartpho from "../public/images/smartpho.png"
import universal from "../public/images/universal.png"
import fuga from "../public/images/fuga.png"
import symphoni from "../public/images/symphonic.png"
import downtown from "../public/images/downtown.png"
import Benifits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/footer";
import header from "../public/images/header.png";
import Logo from "../public/images/header.png"
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
    <div className={`home_bg h-[80vh] md:h-[100vh] relative pl-2 md:pl-8 lg:pl-32 ${scrolled ? 'scrolled' : ''}`}>
    <div className={`fixed top-0 left-0 right-0 bg-${scrolled ? "[#000000]" : "transparent"} z-[1]`}>
      <div className={`flex flex-row justify-between`}>
        <div className="pt-3 lg:pt-6 pl-2 md:pl-8 lg:pl-32">
          <Image src={header} alt="logo" height={84} width={103} />
        </div>
        <div className="hidden md:flex flex-row justify-between items-center pt-4 mr-32">
          <div className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer">HOME</div>
          <div className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer"><Link to="benefits" smooth={true} duration={500}>BENEFITS</Link></div>
          <div className="homehead text-[16px] leading-[16px] text-[#ffffff] ml-5 cursor-pointer mr-[150px] lg:mr-[300px]"><Link to="works">HOW IT WORK</Link></div>
          <div className='h-[45px] w-[148px] rounded-[42px] text-[#000000] bg-[#ffffff] pt-[10px] cursor-pointer ml-5' onClick={() => router.push('/contact')} >
            <center>CONTACT</center>
          </div>
        </div>
        <div
            onClick={handleNavbar}
            className="block md:hidden sm:block items-center cursor-pointer z-50 pt-8 mr-10"
          >
            {nav ? (
              <AiOutlineClose size={30} className="text-[#000000] " />
            ) : (
              <CgMenuRightAlt size={30} className="text-[#ffffff] " />
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
                  >
                    <Link to="benefits" onClick={() => setNav(false)} smooth={true} duration={500}>BENEFITS</Link>
                  </li>
                <li
                  className="menu-item cursor-pointer"
                  style={{
                    fontWeight: "600",
                    color: "#808285",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  <Link to="works" smooth={true} duration={500} onClick={() => setNav(false)}>HOW IT WORK</Link>
                </li>
                <div className='h-[45px] w-[148px] rounded-[42px] text-[#ffffff] bg-[#000000] pt-[10px] cursor-pointer' onClick={() => router.push('/contact')}>
                  <center>CONTACT</center>
                </div>
            </ul>
          </div>
      </div>
      </div>
      <div className="flex items-center justify-start pt-60 md:pt-64">
      <div className="flex flex-col">
        <div className="h-[3px] w-[196px] bg-[#ffffff]"></div>
        <div className="homehead text-[44px] md:text-[75px] leading-[44px] md:leading-[74px] text-[#ffffff] mt-5">
          Unstash the Music
        </div>
        <div className="homehead text-[44px] md:text-[75px] leading-[44px] md:leading-[74px] pb-4 text-[#ffffff]">
          Unlock the Bag
        </div>
        <div className="flex flex-row mt-5">
          <div className="hidden md:block w-[11px] h-[76px] bg-[#ffffff]"></div>
          <div className="homehead text-[#ffffff] text-[35px] leading-[33px] w-[90%] md:w-[55%] ml-1 md:ml-5 mt-1">
            Empowering musicians with upfront cash and transparent deals
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="w-full h-[223px] flex flex-col justify-center items-center bg-[#000000]">
      <div className="homehead text-[48px] leading-[48px] mb-5 text-[#ffffff]">
        Our Partners
      </div>
      <div className="h-[126px] w-[90%] md:w-[80%] border-[1px] border-[#FFFFFF47] rounded-[22px] flex flex-row justify-between px-2 md:px-16 items-center">
        <div>
          <Image src={smartpho} alt="img" height={69} width={281}/>
        </div>
        <div>
          <Image src={universal} alt="img" height={95} width={96}/>
        </div>
        <div>
          <Image src={fuga} alt="img" height={86} width={129}/>
        </div>
        <div>
          <Image src={symphoni} alt="img" height={112} width={108}/>
        </div>
        <div>
          <Image src={downtown} alt="img" height={63} width={160}/>
        </div>
        </div>
      </div>
      <Element name="benefits">
        <Benifits/>
      </Element>
      <Element name="works">
      <HowItWorks/>
      </Element>
      <Footer bg='#000000' btnbg='#ffffff' logo={Logo}/>
    </div>
  );
}
