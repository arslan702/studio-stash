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
import HeaderLogo from "../public/images/headerLogo.png";
import Logo from "../public/images/logo.png"
import { useEffect, useState } from "react";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { useRouter } from "next/navigation";

const gradientStyle = {
  background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: '300',
  color: 'transparent', // Fallback color for browsers that don't support text gradients
};

export default function Home() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

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
        <div className="pt-3 lg:pt-6 pl-8 lg:pl-32">
          <Image src={HeaderLogo} alt="logo" height={84} width={207} />
        </div>
        <div className="flex flex-row justify-between items-center pt-4 mr-32">
          <div className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer">HOME</div>
          <div className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer"><Link to="benefits" smooth={true} duration={500}>BENEFITS</Link></div>
          <div className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer" onClick={() => router.push('/contact')}>CONTACT US</div>
          <div className="homehead text-[16px] leading-[16px] text-[#ffffff] mx-5 cursor-pointer"><Link to="works">HOW IT WORK</Link></div>
          <div className='h-[45px] w-[148px] rounded-[42px] text-[#000000] pt-[10px] cursor-pointer ml-5' onClick={() => router.push('/contact')} style={{background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)'}}>
            <center>CONTACT</center>
          </div>
        </div>
      </div>
      </div>
      <div className="flex items-center justify-start pt-48 md:pt-64">
      <div className="flex flex-col">
        <div className="h-[3px] w-[196px]" style={{background: "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)"}}></div>
        <div className="homehead text-[44px] md:text-[75px] leading-[44px] md:leading-[74px] text-[#ffffff] mt-5">
          Unstash the Music
        </div>
        <div className="homehead text-[44px] md:text-[75px] leading-[44px] md:leading-[74px] pb-4" style={gradientStyle}>
          Unlock the Bag
        </div>
        <div className="flex flex-row mt-5">
          <div className="hidden md:block w-[11px] h-[76px]" style={{background: "linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)"}}></div>
          <div className="homehead text-[#ffffff] text-[35px] leading-[33px] w-[90%] md:w-[55%] ml-1 md:ml-5 mt-1">
            Empowering musicians with upfront cash and transparent deals
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="w-full h-[223px] flex flex-col justify-center items-center bg-[#000000]">
      <div className="homehead text-[48px] leading-[48px] mb-5" style={gradientStyle}>
        Our Partners
      </div>
      <div className="h-[126px] w-[90%] md:w-[80%] border-[1px] border-[#FFFFFF47] rounded-[22px] flex flex-row justify-between px-2 md:px-16 items-center">
        <div>
          <Image src={universal} alt="img" height={95} width={96}/>
        </div>
        <div>
          <Image src={smartpho} alt="img" height={69} width={281}/>
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
      <Footer bg='#000000' logo={Logo}/>
    </div>
  );
}
