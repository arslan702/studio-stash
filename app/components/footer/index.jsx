import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer({bg, logo}) {
  const router = useRouter();
  return (
    <div>
        <div className={`w-full h-[259px] flex flex-col justify-center items-center bg-[${bg}] text-[#ffffff]`}>
            <Image src={logo} alt='logo' width={157} height={64} className='mb-8'/>
            <div onClick={() => router.push('/contact')} className='h-[45px] w-[148px] rounded-[42px] text-[#000000] pt-2 cursor-pointer' style={{background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)'}}>
                <center>Contact</center>
            </div>
        </div>
        <div className='w-full flex justify-center items-center h-[49px]' style={{background: 'linear-gradient(88.77deg, #CEAD64 2.99%, #ECE1A9 48.88%, #AF8C3D 99.08%)'}}>
            ©2024 StudioStash from YingYang & Co.
        </div>
    </div>
  )
}

export default Footer