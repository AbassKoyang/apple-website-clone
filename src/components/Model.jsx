import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react';

import { allColorsImg } from '../utils';

const Model = () => {

    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#heading',
                toggleActions: "play reverse play reverse",
                start: 'top bottom'
            }
        })
    }, []);
    useGSAP(() => {
        gsap.to('#test', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#d',
                start: 'top center'
            }
        })
    }, []);

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h1 id="heading" className="section-heading">
                Take a closer look.
            </h1>

            <div id='d' className="flex flex-col items-center mt-10 relative">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden flex-center">
                    <img src={allColorsImg} alt="" />
                </div>
                {/* <button id='test' className='sticky bottom-10 text-5xl text-red-500 translate-y-[100px] opacity-0'>TestButton</button> */}
                <div className="mt-16 flex-center flex-col">
                    <p className='text-xs font-semibold text-white'>6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Natural Titanium</p>
                    <div className="scale-1 py-4 px-5 bg-gray-300 backdrop-blur rounded-full flex-center gap-3 mt-3 w-fit">
                        <span className='model_color_buttons bg-gradient-to-r from-[#8F8A81] via-[#202630] to-[#242526]'></span>
                        <span className='model_color_buttons bg-[#8F8A81]'></span>
                        <span className='model_color_buttons bg-[#202630]'></span>
                        <span className='model_color_buttons bg-[#C9C8C3]'></span>
                        <span className='model_color_buttons bg-[#242526]'></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model