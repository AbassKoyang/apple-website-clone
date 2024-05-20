import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const FullStory = () => {
    useGSAP(() => {
        gsap.to('#full-story', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#full-story',
                toggleActions: "play reverse play reverse",
                start: 'top bottom'
            }
        })
        gsap.to('#scaled-image', {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: '#scaled-images-con',
                toggleActions: "play reverse play reverse",
                start: 'top center'
            }
        })
        gsap.to('#full-story-text', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#full-story-text-con',
                toggleActions: "play reverse play reverse",
                start: 'top center'
            }
        })
    }, []);

  return (
    <section className="common-padding bg-zinc">
        <div className="screen-max-width">
            <h2 id='full-story' className='section-heading'>Explore the full story.</h2>
            <div className="subsection pt-[200px] pb-[270px]" id="subsection">
                <h4 className='ml-40 text-[80px] text-[#F5F5F7] font-semibold leading-[1] tracking-[-0.015em]'>iPhone. <br />Forged in titanium.</h4>
                <div className="mt-24 w-full flex flex-col items-center relative">
                    <div className="w-full grid grid-rows-[517px] gap-5 mx-[105px] mb-[60px] max-w-[1050px]">
                        <div className="row-span-1 flex justify-center items-end h-[517px] object-contain bg-black">
                            <video className='pointer-events-none' preload='auto' autoPlay playsInline muted key={exploreVideo}>
                                <source src={exploreVideo} type='video/mp4'/>
                            </video>
                        </div>
                        <div id='scaled-images-con' className="row-span-1 grid grid-cols-2 gap-5">
                            <div className="col-span-1 object-contain bg-black flex-center overflow-hidden pl-8">
                                <img id='scaled-image' className='opacity-30 scale-125' src={explore1Img} alt="A picture of the iphone 15 camera" />
                            </div>
                            <div className="col-span-1 object-contain bg-black flex-center overflow-hidden">
                                <img id='scaled-image' className='opacity-30 scale-125' src={explore2Img} alt="A picture of the iphone 15 camera" />
                            </div>
                        </div>
                    </div>

                    <div id='full-story-text-con' className="w-full flex justify-around flex-wrap max-w-[1050px]">
                        <div className=" max-w-[100%] md:max-w-[41.6%] lg:max-w-[33.3%]">
                            <p id='full-story-text' className='typography-site-body opacity-0 translate-y-20'>
                            iPhone 15 Pro is <strong className='text-[#f5f5f7] font-semibold'>the first iPhone to feature an aerospace‑grade titanium design</strong>, using the same alloy that spacecraft use for missions to Mars.
                            </p>
                        </div>
                        <div className=" max-w-[100%] md:max-w-[41.6%] lg:max-w-[33.3%]">
                            <p id='full-story-text' className='typography-site-body opacity-0 translate-y-20'>
                            Titanium has one of the best strength‑to‑weight ratios of any metal, making these our <strong  className='text-[#f5f5f7] font-semibold'>lightest Pro models ever</strong>. You’ll notice the difference the moment you pick one up
                            </p>
                        </div>
                    </div>
                    <button className='sticky bottom-[100px] flex items-center gap-4'>
                        <span>More on design & display</span>
                        <span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FullStory