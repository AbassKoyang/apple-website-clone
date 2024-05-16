import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react';

import { allColorsImg, blackTitaniumImg, blueTitaniumImg, titaniumImg, whiteTitaniumImg } from '../utils';

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
        gsap.to('#test', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#con',
                start: 'top center'
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
        gsap.to('#control-buttons-wrapper', {
            scale: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: '#con',
                start: 'top center'
            }
        })
        gsap.to('#control-buttons-wrapper', {
            border: '0px',
            duration: 0.5,
            scrollTrigger: {
                trigger: '#con',
                start: 'top center'
            }
        })
        gsap.to('#control-buttons-wrapper', {
            width: 'fit-content',
            duration: 0.5,
            scrollTrigger: {
                trigger: '#con',
                start: 'top center'
            }
        })
        gsap.to('#desc', {
            opacity: 1,
            delay: 1,
            scrollTrigger: {
                trigger: '#con',
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

            <div id='con' className="flex flex-col items-center mt-10 relative">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden flex-center">
                    <img className='transition-all duration-300 ease-in-out' src={iphoneImg} alt="Iphone image" />
                </div>
                {/* <button id='test' className='sticky bottom-10 text-5xl text-red-500 translate-y-[100px] opacity-0'>TestButton</button> */}
                <div id='control-buttons-con' className="mt-16 flex-center flex-col sticky bottom-10 translate-y-[100px]">
                    <p id='desc' className='text-xs font-semibold text-white transition-all duration-300 ease-in-out opacity-0'>{iphoneDescription}</p>
                    <div id='control-buttons-wrapper' className="scale-0 py-2.5 px-5 bg-gray-300 backdrop-blur rounded-full flex-center gap-3 mt-3.5 w-fit">
                        <button onClick={() => setIphoneColor('all-colors')} className={`${iphoneColor === 'all-colors' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full`}>
                            <div className={`model_color_buttons bg-gradient-to-r from-[#8F8A81] via-[#202630] to-[#242526] ${iphoneColor === 'all-colors' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>

                        <button onClick={() => setIphoneColor('natural-titanium')} className={`${iphoneColor === 'natural-titanium' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full`}>
                        <div className={`model_color_buttons bg-[#8F8A81] ${iphoneColor === 'natural-titanium' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>
                        
                        <button onClick={() => setIphoneColor('blue-titanium')} className={`${iphoneColor === 'blue-titanium' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full`}>
                        <div className={`model_color_buttons bg-[#202630] ${iphoneColor === 'blue-titanium' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>

                        <button onClick={() => setIphoneColor('white-titanium')} className={`${iphoneColor === 'white-titanium' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full`}>
                        <div className={`model_color_buttons bg-[#C9C8C3] ${iphoneColor === 'white-titanium' ? 'border-2 border-gray-300' : ''} transition-all duration-300 ease-in-out`}></div>
                        </button>

                        <button onClick={() => setIphoneColor('black-titanium')} className={`${iphoneColor === 'black-titanium' ? 'p-1 bg-white border-2 border-blue' : 'p-0 '} transition-all duration-300 ease-in-out rounded-full`}>
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