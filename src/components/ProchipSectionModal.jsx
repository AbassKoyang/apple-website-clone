import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { prochipGamingImg } from '../utils'

const ProchipSectionModal = ({visible, handleClick}) => {
  return (
    <section id='prochip-section-modal' className={` ${visible ? 'block top-0' : 'top-[100%]'} fixed z-[1000] right-0 w-screen h-screen flex justify-center bg-gray-300 backdrop-blur transition-all duration-500 ease-in-out pl-6 pr-6 md:pl-[25px] md:pr-3 py-16 overflow-y-scroll`}>

        <div className="w-full max-w-[375px] md:max-w-[1400px] h-fit bg-black rounded-3xl relative flex-center flex-col">
            <div className="w-full p-0 m-0 flex justify-end sticky top-0">
                <button onClick={handleClick} aria-label='close modal' className='mt-[15px] mr-[15px] p-1 bg-[#333336] flex-center rounded-full transition-all duration-300 ease-in-out group'>
                    <RiCloseFill  className="text-[#f5f5f7] group-hover:text-white text-[25px]" />
                </button>
            </div>
            <div className="w-full bg-black max-w-[980px] pl-[82px]">
                <h4 className='max-w-[280px] md:max-w-[519px] lg:max-w-[980px] text-[40px] leading-[1.1] font-semibold tracking-[0em] md:text-[64px] md:leading-[1.0625] md:tracking-[-0.009em]'>A17 Pro chip.<br />A monster win for gaming.</h4>
                <p className='typography-site-headline-reduced mt-3'>A new, Pro‑class GPU enables games not<br />
                seen before on any smartphone.</p>
                <div className="max-w-[821px] lg:my-20">
                    <img className='w-full' src={prochipGamingImg} alt="An image from a graphically intense video game" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProchipSectionModal