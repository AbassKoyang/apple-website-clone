import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react';

import { allColorsImg, blackTitaniumImg, blueTitaniumImg, titaniumImg, whiteTitaniumImg } from '../utils';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const Model = () => {

    const [iphoneColor, setIphoneColor] = useState('all-colors');
    const [iphoneImg, setiphoneImg] = useState(allColorsImg);
    const [iphoneDescription, setIphoneDescription] = useState('6.1” iPhone 15 Pro1 in four colors')

    useEffect(() => {
      switch (iphoneColor) {
        case 'all-colors':
            setiphoneImg(allColorsImg);
            setIphoneDescription('6.1” iPhone 15 Pro1 in four colors')
            break;
        case 'natural-titanium':
            setiphoneImg(titaniumImg);
            setIphoneDescription('6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Natural Titanium')
            break;
        case 'blue-titanium':
            setiphoneImg(blueTitaniumImg);
            setIphoneDescription('6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Blue Titanium')
            break;
        case 'white-titanium':
            setiphoneImg(whiteTitaniumImg);
            setIphoneDescription('6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in White Titanium')
            break;
        case 'black-titanium':
            setiphoneImg(blackTitaniumImg);
            setIphoneDescription('6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Black Titanium')
            break;
      
        default:
            setiphoneImg(allColorsImg)
            break;
      }
    }, [iphoneColor])
    
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
        gsap.to('#control-buttons-con', {
            y: 0,
            scrollTrigger: {
                trigger: '#con',
                start: 'top bottom'
            }
        })
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#con',
                start: 'top center',
                end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport height
                toggleActions: "play none none reverse"
            }
        })

        tl.to('#control-buttons-wrapper', {
            scale: 1,
        })
        .to('#control-buttons-wrapper', {
            borderWidth: 0,
            delay: 0.5,
            duration: 0.5,
        })
        .to('#control-buttons-wrapper', {
            width: 'fit-content',
            duration: 0.3,
            delay: 0.3,
        })
        .to('#control-buttons-wrapper', {
            padding: '10px 20px',
            duration: 0.5,
        })
        .to('#radio-button', {
            scale: 1,
        })
        .to('#desc', {
            opacity: 1,
            delay: 1,
        })
    }, []);

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h2 id="heading" className="section-heading">
                Take a closer look.
            </h2>

            <div id='con' className="flex flex-col items-center mt-10 relative">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden flex-center">
                    <img className={`${iphoneColor === 'all-colors' ? 'w-[329px]' : 'w-[224px]'} md:w-auto transition-all duration-300 ease-in-out`} src={iphoneImg} alt="Iphone image" />
                </div>
                {/* <button id='test' className='sticky bottom-10 text-5xl text-red-500 translate-y-[100px] opacity-0'>TestButton</button> */}
                <div id='control-buttons-con' className="mt-16 flex-center flex-col sticky bottom-10 translate-y-[100px]">
                    <p id='desc' className='bg-[#0000004D] rounded-[5px] px-1.5 py-1 backdrop-blur max-w-xs md:max-w-md text-center text-pretty text-xs font-semibold text-white transition-all duration-300 ease-in-out opacity-0'>{iphoneDescription}</p>
                    <div aria-label='Iphone color selector container' id='control-buttons-wrapper' className="scale-0 size-[70px] border-[12px] border-blue py-0 px-0 bg-gray-300 backdrop-blur rounded-full flex-center gap-3 mt-2.5 md:mt-3.5">
                        <button 
                        id="radio-button"
                        aria-label='Click to show 6.1” iPhone 15 Pro1 in four colors' 
                        aria-haspopup={true} 
                        aria-expanded={iphoneColor === 'all-colors'} 
                        aria-selected={iphoneColor === 'all-colors'} 
                        onClick={() => setIphoneColor('all-colors')} 
                        className={`${iphoneColor === 'all-colors' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full scale-0`}>
                            <div className={`model_color_buttons bg-gradient-to-r from-[#8F8A81] via-[#202630] to-[#242526] ${iphoneColor === 'all-colors' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>

                        <button 
                        id="radio-button"
                        aria-label='Click to show 6.7” iPhone 15 Pro Max1 and
                        6.1” iPhone 15 Pro1 in Natural Titanium' 
                        aria-haspopup={true} 
                        aria-expanded={iphoneColor === 'natural-titanium'} 
                        aria-selected={iphoneColor === 'natural-titanium'} 
                        onClick={() => setIphoneColor('natural-titanium')} 
                        className={`${iphoneColor === 'natural-titanium' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full scale-0`}>
                        <div 
                        className={`model_color_buttons bg-[#8F8A81] ${iphoneColor === 'natural-titanium' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>
                        
                        <button
                        id="radio-button"
                        aria-label='Click to show 6.7” iPhone 15 Pro Max1 and
                        6.1” iPhone 15 Pro1 in Blue Titanium' 
                        aria-haspopup={true} 
                        aria-expanded={iphoneColor === 'blue-titanium'} 
                        aria-selected={iphoneColor === 'blue-titanium'} 
                        onClick={() => setIphoneColor('blue-titanium')} 
                        className={`${iphoneColor === 'blue-titanium' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full scale-0`}>
                        <div className={`model_color_buttons bg-[#202630] ${iphoneColor === 'blue-titanium' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>

                        <button 
                        id="radio-button"
                        aria-label='Click to show 6.7” iPhone 15 Pro Max1 and
                        6.1” iPhone 15 Pro1 in White Titanium' 
                        aria-haspopup={true} 
                        aria-expanded={iphoneColor === 'white-titanium'} 
                        aria-selected={iphoneColor === 'white-titanium'}
                        onClick={() => setIphoneColor('white-titanium')} 
                        className={`${iphoneColor === 'white-titanium' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full scale-0`}>
                        <div className={`model_color_buttons bg-[#C9C8C3] ${iphoneColor === 'white-titanium' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>

                        <button
                        id="radio-button"
                        aria-label='Click to show 6.7” iPhone 15 Pro Max1 and
                        6.1” iPhone 15 Pro1 in Black Titanium' 
                        aria-haspopup={true} 
                        aria-expanded={iphoneColor === 'black-titanium'} 
                        aria-selected={iphoneColor === 'black-titanium'} 
                        onClick={() => setIphoneColor('black-titanium')} 
                        className={`${iphoneColor === 'black-titanium' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full scale-0`}>
                        <div className={`model_color_buttons bg-[#242526] ${iphoneColor === 'black-titanium' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model