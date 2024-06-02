import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { RiAddLine } from 'react-icons/ri'

import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const CustomButton = ({handleClick, target, buttonText}) => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: target,
              start: "top 20%", // Start animation when the top of the element hits 80% of the viewport height
              end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport height
              toggleActions: "play none none reverse" // Play the animation on enter

            }
          });
        tl.to('#custom-button', {
            scale: 0.9,
        })
        .to('#custom-button', {
            borderWidth: 0,
            delay: 0.3,
            duration: 0.3,
        })
        .to('#custom-button', {
            width: 'auto',
            height: '56px',
            duration: 0.3,
            delay: 0.3,
        })
        .to('#button-span', {
            scale: 1,
        })
        .to('#button-span', {
            scale: 1,
        })
    }, [])

  return (
    <button onClick={handleClick} id='custom-button' className='scale-0 size-[70px] border-[12px] border-blue mt-[50px] md:mt-[100px] sticky bottom-[30px] flex items-center bg-gray-300 backdrop-blur rounded-full group z-[500]'>
        <span id='button-span' className="scale-0 ml-[32px] mr-[24px] text-[14px] md:text-[16px] leading-[1.381002381] font-semibold tracking-normal max-w-[30em] text-white">{buttonText}</span>
        <span id='button-span' className="scale-0 flex-center bg-[#0071e3] rounded-[50%] mr-[10px]">
            <RiAddLine className="p-[2px] text-[36px] text-white opacity-80 group-hover:opacity-100 transition-all duration-200 ease-in-out" />
        </span>
    </button>
  )
}

export default CustomButton