// import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer({bg, logo, btnbg}) {
  const router = useRouter();
  return (
    <div>
        <div className={`w-full h-[259px] flex flex-col justify-center items-center bg-[${bg}] text-[#ffffff]`}>
            {/* <Image src={logo} alt='logo' width={75} height={64} className='mb-8'/> */}
            <div className={`flex flex-col text-[${btnbg}] text-[24px] leading-[20px] mb-5 font-[400]`}>
              <div>Studio</div>
              <div>Stash</div>
            </div>
            <button onClick={() => router.push('/contact')} className={`h-[45px] w-[148px] rounded-[42px] text-[${bg}] cursor-pointer bg-[${btnbg}]`}>
                <center>Contact</center>
            </button>
        </div>
        <div className={`w-full flex justify-center items-center h-[49px] bg-[${btnbg}] text-[${bg}] text-[16px] leading-[16px] font-[600]`}>
            ©2024 StudioStash
        </div>
    </div>
  )
}

export default Footer