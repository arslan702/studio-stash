import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer({bg, logo, btnbg}) {
  const router = useRouter();
  return (
    <div>
        <div className={`w-full h-[259px] flex flex-col justify-center items-center bg-[${bg}] text-[#ffffff]`}>
            <Image src={logo} alt='logo' width={75} height={64} className='mb-8'/>
            <div onClick={() => router.push('/contact')} className={`h-[45px] w-[148px] rounded-[42px] text-[${bg}] pt-[10px] cursor-pointer bg-[${btnbg}]`}>
                <center>Contact</center>
            </div>
        </div>
        <div className='w-full flex justify-center items-center h-[49px] bg-[#ffffff]'>
            ©2024 StudioStash from YingYang & Co.
        </div>
    </div>
  )
}

export default Footer