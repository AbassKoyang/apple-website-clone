import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { fullStoryModalVideo } from '../utils'

const FullStoryModal = ({visible, handleClick}) => {

  return (
    <section id='fullstory-modal' className={` ${visible ? 'block top-0' : 'top-[100%]'} fixed right-0 w-screen h-screen bg-gray-300 backdrop-blur transition-all duration-500 ease-in-out pl-[26px] pr-5 py-10 overflow-y-scroll`}>

        <div className="w-full h-fit bg-black rounded-3xl relative">
            <div className="p-0 m-0 flex justify-end sticky top-0">
                <button onClick={ handleClick} aria-label='close modal' className='mt-[15px] mr-[15px] p-1 bg-[#333336] flex-center rounded-full transition-all duration-300 ease-in-out group'>
                    <RiCloseFill  className="text-[#f5f5f7] group-hover:text-white text-[25px]" />
                </button>
            </div>
            <div className="w-full bg-black">
              <h1 className='ml-20 md:ml-60 max-w-[200px] md:max-w-max text-[35px] md:text-[60px] text-[#F5F5F7] font-semibold leading-[1.1] md:leading-[1] tracking-[0em] md:tracking-[-0.015em] pt-[60px]'>iPhone. <br />Forged in titanium.</h1>
              <div className="w-full h-full bg-black mt-14 mb-[120px]">
                <video className='pointer-events-none' preload='auto' autoPlay playsInline muted key={fullStoryModalVideo}>
                    <source src={fullStoryModalVideo} type='video/mp4'/>
                </video>
              </div>
            </div>

            <div className="w-full bg-zinc pt-[120px]">
              <div className="w-full max-w-[]">

              </div>
            </div>
        </div>
    </section>
  )
}

export default FullStoryModal