import React, { useState } from 'react'
import { chipImg, frameImg, gameVideo } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import CustomButton from './CustomButton'
import ProchipSectionModal from './ProchipSectionModal'

import { ScrollTrigger } from 'gsap/all';
import { RiAddLine } from 'react-icons/ri'

gsap.registerPlugin(ScrollTrigger);

const ProchipSection = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    useGSAP(()=>{
        gsap.to('#prochip-text1', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-text1',
            toggleActions: "play play play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
        }})
        gsap.to('#prochip-text2', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-text2',
            toggleActions: "play play play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
        }})
        gsap.to('#prochip-text3', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-text3',
            toggleActions: "play play play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
        }})
    }, [])

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#prochip',
              start: "top 20%", // Start animation when the top of the element hits 80% of the viewport height
              end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport height
              toggleActions: "play none none reverse" // Play the animation on enter

            }
          });
        tl.to('#prochip-button-id', {
            scale: 0.9,
        })
        .to('#prochip-button-id', {
            borderWidth: 0,
            delay: 0.3,
            duration: 0.3,
        })
        .to('#prochip-button-id', {
            width: 'auto',
            height: '56px',
            duration: 0.3,
            delay: 0.3,
        })
        .to('#prochip-span-id', {
            scale: 1,
        })
        .to('#prochip-span-id', {
            scale: 1,
        })
    }, [])
    
  return (
    <section className="common-padding bg-black">
        <div id="prochip" className="screen-max-width flex-center flex-col relative">
            <div className="w-full max-w-[1054px] flex flex-col items-center">
                <img className='w-[180px]' src={chipImg}  alt="A17 pro chip" />
                <h4 className='typography-site-headline-elevated text-center mt-[45px] md:mt-[70px] lg:mt-[100px]'>A17 Pro chip.<br />A monster win for gaming.</h4>
                <p className="typography-site-headline-reduced mt-[35px] md:mt-10 text-center">It’s here. The biggest redesign in the history of Apple GPUs.</p>
                <div className="w-[322px] md:w-[696px] lg:w-[1054px] mt-10 relative h-[160px] md:h-[340px] lg:h-[516px] overflow-hidden p-0 flex-center rounded-3xl lg:rounded-[100px]">
                    <img className='absolute top-0 left-0 w-full h-full z-20 m-0 p-0' src={frameImg} alt="Iphone 15 Pro frame" />
                    <div className="w-[96.5%] h-[95%] overflow-hidden rounded-[30px] flex items-center justify-center bg-black">
                    <div className="">
                    <video className='pointer-events-none object-cover h-full w-full' preload='auto' autoPlay playsInline muted key={gameVideo}>
                        <source src={gameVideo} type='video/mp4'/>
                    </video>
                    </div>
                    </div>
                </div>

                <p className='text-[17px] md:text-[21px] leading-[1.2353641176] font-semibold tracking-[-0.022em] text-gray mt-5 text-center'>Honkai: Star Rail</p>

                <div className="w-full max-w-[] md:max-w-[980px] mt-[60px] flex items-center justify-center md:items-start flex-col gap-5 md:gap-0 md:flex-row md:justify-around">
                    <div className="w-full max-w-[330px]">
                        <p id='prochip-text1' className='translate-y-20 opacity-0 typography-site-body-fullstory-modal'> A17 Pro is an entirely new class of iPhone chip that delivers our <strong className='text-[#f5f5f7] font-semibold'>best graphics performance by far.</strong></p>
                        <p id='prochip-text2' className="mt-4 translate-y-20 opacity-0 typography-site-body-fullstory-modal">
                        Mobile <strong className='text-[#f5f5f7] font-semibold'>games will look and feel so immersive</strong>, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                        </p>
                    </div>
                    <div className="w-full max-w-[330px]">
                    <figure id='prochip-text3' className="typography-site-body-fullstory-modal translate-y-20 opacity-0">
                        New
                        <br />
                        <strong className='text-[32px] md:text-[40px] lg:text-[48px] text-[#f5f5f7] font-semibold'>Pro-class GPU</strong> 
                        <br /> 
                        with 6 cores
                    </figure>
                    </div>
                </div>
            </div>
            <button onClick={() => setModalVisible(true)} id='prochip-button-id' className='scale-0 size-[70px] border-[12px] border-blue mt-[50px] md:mt-[100px] sticky bottom-[30px] flex items-center bg-gray-300 backdrop-blur rounded-full group z-[500]'>
                <span id='prochip-span-id' className="scale-0 ml-[32px] mr-[24px] text-[14px] md:text-[16px] leading-[1.381002381] font-semibold tracking-normal max-w-[30em] text-white">Go deeper on A17 Pro</span>
                <span id='prochip-span-id' className="scale-0 flex-center bg-[#0071e3] rounded-[50%] mr-[10px]">
                    <RiAddLine className="p-[2px] text-[36px] text-white opacity-80 group-hover:opacity-100 transition-all duration-200 ease-in-out" />
                </span>
            </button>
            {/* <CustomButton target="#prochip" buttonId="prochip-button-id" spanId="prochip-span-id" buttonText="Go deeper on A17 Pro" handleClick={() => setModalVisible(true)}/> */}
        </div>
        <ProchipSectionModal visible={isModalVisible} handleClick={() => setModalVisible(false)} />
    </section>
  )
}

export default ProchipSection