import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { RiCloseFill } from 'react-icons/ri'

const FullStoryModal = ({visible, handleClick}) => {

  return (
    <section id='fullstory-modal' className={` ${visible ? 'block top-0' : 'top-[100%]'} fixed right-0 w-screen bg-gray-300 backdrop-blur transition-all duration-500 ease-in-out pl-[26px] pr-5 py-10`}>

        <div className="w-full bg-black rounded-3xl">
            <div className="p-0 m-0 flex justify-end">
                <button onClick={ handleClick} aria-label='close modal' className='sticky top-0 mt-[15px] mr-[15px] p-1 bg-gray-300 flex-center rounded-full'>
                    <RiCloseFill  className="text-white text-[25px]" />
                </button>
            </div>
            <h1 className='ml-20 md:ml-60 max-w-[200px] md:max-w-max text-[35px] md:text-[60px] text-[#F5F5F7] font-semibold leading-[1.1] md:leading-[1] tracking-[0em] md:tracking-[-0.015em] pt-[60px]'>iPhone. <br />Forged in titanium.</h1>
        </div>
    </section>
  )
}

export default FullStoryModal