import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useState } from 'react'
import { RiAddLine } from "react-icons/ri";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

import { explore1Img, explore2Img, exploreVideo } from '../utils';
import CustomButton from './CustomButton';
import FullStoryModal from './FullStoryModal';

const FullStory = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    useGSAP(() => {
        gsap.to('#full-story', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#full-story',
                toggleActions: "play play play reverse",
                start: 'top bottom'
            }
        })
        gsap.to('#scaled-image', {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: '#scaled-images-con',
                toggleActions: "play play play reverse",
                start: 'top center'
            }
        })
        gsap.to('#full-story-text', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#full-story-text-con',
                toggleActions: "play play play reverse",
                start: 'top 60%'
            }
        })
    }, []);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#full-story',
              start: "top 20%", // Start animation when the top of the element hits 80% of the viewport height
              end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport height
              toggleActions: "play none none reverse" // Play the animation on enter

            }
          });
        tl.to('#fullstory-button-id', {
            scale: 0.9,
        })
        .to('#fullstory-button-id', {
            borderWidth: 0,
            delay: 0.3,
            duration: 0.3,
        })
        .to('#fullstory-button-id', {
            width: 'auto',
            height: '56px',
            duration: 0.3,
            delay: 0.3,
        })
        .to('#fullstory-span-id', {
            scale: 1,
        })
        .to('#fullstory-span-id', {
            scale: 1,
        })
    }, [])

  return (
    <section className="common-padding bg-zinc">
        <div className="screen-max-width">
            <h2 id='full-story' className='section-heading'>Explore the full story.</h2>
            <div className="fullstory-subsection pt-[100px]  md:pt-[200px]" id="fullstory-subsection">
                <div className="w-full flex-center">
                    <div className="w-full max-w-[460px] md:max-w-[766px] lg:max-w-[1050px]">
                    <h4 className='ml-16 md:ml-16 max-w-[200px] md:max-w-max text-[40px] md:text-[80px] text-[#F5F5F7] font-semibold leading-[1.1] md:leading-[1] tracking-[0em] md:tracking-[-0.015em] mt-0'>iPhone. <br />Forged in titanium.</h4>
                </div>
                </div>
                <div className="mt-[45px] md:mt-24 w-full flex flex-col items-center relative">
                    <div className="w-full grid grid-rows-3 md:grid-rows-[517px] gap-5 mx-[105px] mb-[60px] max-w-[460px] md:max-w-[766px] lg:max-w-[1050px]">
                        <div className="row-span-1 flex justify-center items-end h-[400px] md:h-[517px] object-contain bg-black">
                            <video className='pointer-events-none' preload='auto' autoPlay playsInline muted key={exploreVideo}>
                                <source src={exploreVideo} type='video/mp4'/>
                            </video>
                        </div>
                        <div id='scaled-images-con' className="row-span-2 md:row-span-1 grid grid-cols-2 gap-5">
                            <div className="h-[400px] col-span-2 md:col-span-1 object-contain bg-black flex-center overflow-hidden pl-8">
                                <img id='scaled-image' className='opacity-30 scale-125' src={explore1Img} alt="A picture of the iphone 15 camera" />
                            </div>
                            <div className="h-[400px] col-span-2 md:col-span-1 object-contain bg-black flex-center overflow-hidden">
                                <img id='scaled-image' className='opacity-30 scale-125' src={explore2Img} alt="A picture of the iphone 15 camera" />
                            </div>
                        </div>
                    </div>

                    <div id='full-story-text-con' className="w-full flex justify-around flex-wrap max-w-[1050px]">
                        <div className=" max-w-[100%] md:max-w-[41.6%] lg:max-w-[33.3%]">
                            <p id='full-story-text' className='typography-site-body opacity-0 translate-y-20 max-w-[280px] md:max-w-max margin-inline'>
                            iPhone 15 Pro is <strong className='text-[#f5f5f7] font-semibold'>the first iPhone to feature an aerospace‑grade titanium design</strong>, using the same alloy that spacecraft use for missions to Mars.
                            </p>
                        </div>
                        <div className=" max-w-[100%] md:max-w-[41.6%] lg:max-w-[33.3%] mt-[0.8em] md:mt-0">
                            <p id='full-story-text' className='typography-site-body opacity-0 translate-y-20 max-w-[280px] md:max-w-max margin-inline'>
                            Titanium has one of the best strength‑to‑weight ratios of any metal, making these our <strong  className='text-[#f5f5f7] font-semibold'>lightest Pro models ever</strong>. You’ll notice the difference the moment you pick one up.
                            </p>
                        </div>
                    </div>

                    <button onClick={() => setModalVisible(true)} id='fullstory-button-id' className='scale-0 size-[70px] border-[12px] border-blue mt-[50px] md:mt-[100px] sticky bottom-[30px] flex items-center bg-gray-300 backdrop-blur rounded-full group z-[500]'>
                        <span id='fullstory-span-id' className="scale-0 ml-[32px] mr-[24px] text-[14px] md:text-[16px] leading-[1.381002381] font-semibold tracking-normal max-w-[30em] text-white">More on design & display</span>
                        <span id='fullstory-span-id' className="scale-0 flex-center bg-[#0071e3] rounded-[50%] mr-[10px]">
                            <RiAddLine className="p-[2px] text-[36px] text-white opacity-80 group-hover:opacity-100 transition-all duration-200 ease-in-out" />
                        </span>
                    </button>
                    
                </div>
            </div>
        </div>
        <FullStoryModal visible={isModalVisible} handleClick={() => setModalVisible(false)} />
    </section>
  )
}

export default FullStory