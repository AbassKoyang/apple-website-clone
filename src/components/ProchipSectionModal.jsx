import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { prochipGamingImg, stylizedChipImg } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ProchipSectionModal = ({visible, handleClick}) => {
    useGSAP(() => {
        gsap.to('#prochip-modal-intense-video-image', {
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-modal-intense-video-image',
            toggleActions: "play reverse play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
            scroller: '#prochip-section-modal',
        }})
        gsap.to('#prochip-modal-chip-image', {
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-modal-chip-image',
            toggleActions: "play reverse play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
            scroller: '#prochip-section-modal',
        }})
        gsap.to('#prochip-modal-text1', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-modal-text1',
            toggleActions: "play reverse play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
            scroller: '#prochip-section-modal',
        }})
        gsap.to('#prochip-modal-text2', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-modal-text2',
            toggleActions: "play reverse play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
            scroller: '#prochip-section-modal',
        }})
        gsap.to('#prochip-modal-text3', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-modal-text3',
            toggleActions: "play reverse play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
            scroller: '#prochip-section-modal',
        }})
        gsap.to('#prochip-modal-text4', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-modal-text4',
            toggleActions: "play reverse play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
            scroller: '#prochip-section-modal',
        }})
        gsap.to('#prochip-modal-text5', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-modal-text5',
            toggleActions: "play reverse play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
            scroller: '#prochip-section-modal',
        }})
        gsap.to('#prochip-modal-text6', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
            trigger: '#prochip-modal-text6',
            toggleActions: "play reverse play reverse",
            start: 'top 70%',
            end: 'bottom 0%',
            scroller: '#prochip-section-modal',
        }})
    }, [])
  return (
    <section id='prochip-section-modal' className={`${visible ? 'block top-0' : 'top-[100%]'} fixed z-[1000] right-0 w-screen h-screen flex justify-center bg-gray-300 backdrop-blur transition-all duration-500 ease-in-out pl-6 pr-6 md:pl-[25px] md:pr-3 py-16 overflow-y-scroll`}>

        <div className="w-full max-w-[375px] md:max-w-[1400px] h-fit bg-black rounded-3xl relative flex-center flex-col pb-[100px]">
            <div className="w-full p-0 m-0 flex justify-end sticky top-0">
                <button onClick={handleClick} aria-label='close modal' className='mt-[15px] mr-[15px] p-1 bg-[#333336] flex-center rounded-full transition-all duration-300 ease-in-out group'>
                    <RiCloseFill  className="text-[#f5f5f7] group-hover:text-white text-[25px]" />
                </button>
            </div>
            <div className="w-full bg-black max-w-[980px] lg:pl-[82px] mt-8 px-12 md:px-0">
                <h4 className='max-w-[280px] md:max-w-[519px] lg:max-w-[980px] text-[40px] leading-[1.1] font-semibold tracking-[0em] md:text-[64px] md:leading-[1.0625] md:tracking-[-0.009em]'>A17 Pro chip.<br />A monster win for gaming.</h4>
                <p className='typography-site-headline-reduced mt-3'>A new, Pro‑class GPU enables games not<br />
                seen before on any smartphone.</p>
                <div className="max-w-[821px] lg:my-20">
                    <img id="prochip-modal-intense-video-image" className='w-full opacity-0' src={prochipGamingImg} alt="An image from a graphically intense video game" />
                </div>
                <div className="w-full flex items-center md:items-start flex-col gap-5 md:gap-0 md:flex-row md:justify-around">
                    <div className="w-full md:max-w-[330px] typography-site-body-fullstory-modal">
                        <p id='prochip-modal-text1' className='translate-y-20 opacity-0'>iPhone 15 Pro uses hardware-accelerated ray tracing for the first time — that’s up to four times faster than software‑based ray tracing, delivering <strong className='text-[#f5f5f7] font-semibold'>more fluid graphics and true‑to‑life lighting</strong>. It’s the fastest ray‑tracing performance in a smartphone.
                        </p>
                    </div>
                    <div className="w-full md:max-w-[330px]  typography-site-body-fullstory-modal">
                        <p id='prochip-modal-text2' class="translate-y-20 opacity-0">
                        MetalFX Upscaling combines the performance of the GPU and the Neural Engine to produce <strong className='text-[#f5f5f7] font-semibold'>high‑resolution graphics while using much less power</strong>. So you can game on and on.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full flex-center bg-black px-12 md:px-0'>
              <hr className='h-[1px] border-0 outline-0 w-full max-w-[980px] bg-[#424245] my-[120px]' />
            </div>

            <div className="w-full bg-black max-w-[980px] lg:pl-[82px] px-12 md:px-0">
                <div className="w-full flex-center">
                    <img id="prochip-modal-chip-image" className="opacity-0 lg:w-[374px]" src={stylizedChipImg} alt="Stylized illustration of the A17 pro chip" />
                </div>
                <div className="w-full max-w-[980px] mt-[60px] flex items-start md:items-start flex-col gap-5 md:gap-0 md:flex-row md:justify-around">
                    <div className=" w-full md:w-full md:max-w-[330px] typography-site-body-fullstory-modal">
                        <figure id='prochip-modal-text3' class="typography-site-body-fullstory-modal translate-y-20 opacity-0">
                            <span>Up to</span>
                            <br />
                            <strong className='text-[32px] md:text-[40px] lg:text-[48px] my-1 text-[#f5f5f7] font-semibold'>20% faster GPU</strong> 
                            <br /> 
                            <span>now with 6 cores</span>
                        </figure>
                    </div>
                    <div className="w-full md:max-w-[330px] typography-site-body-fullstory-modal">
                        <figure id='prochip-modal-text4' class="typography-site-body-fullstory-modal translate-y-20 opacity-0">
                            <span>Up to</span>
                            <br />
                            <strong className='text-[32px] md:text-[40px] lg:text-[48px] my-1 text-[#f5f5f7] font-semibold'>4x faster ray tracing</strong> 
                            <br /> 
                            <span>than A16 Bionic</span>
                        </figure>
                    </div>
                </div>
                <div className="w-full max-w-[980px] mt-[60px] flex items-center md:items-start flex-col gap-5 md:gap-0 md:flex-row md:justify-around">
                    <div className="w-full md:max-w-[330px] typography-site-body-fullstory-modal">
                        <figure id='prochip-modal-text5' class="typography-site-body-fullstory-modal translate-y-20 opacity-0">
                            <span>Up to</span>
                            <br />
                            <strong className='text-[32px] md:text-[40px] lg:text-[48px] my-1 text-[#f5f5f7] font-semibold'>20% faster CPU</strong> 
                            <br /> 
                            <span>with 6 cores</span>
                        </figure>
                    </div>
                    <div className="w-full md:max-w-[330px] typography-site-body-fullstory-modal">
                        <figure id='prochip-modal-text6' class="typography-site-body-fullstory-modal translate-y-20 opacity-0">
                            <span>Up to</span>
                            <br />
                            <strong className='text-[32px] md:text-[40px] lg:text-[48px] my-1 text-[#f5f5f7] font-semibold'>2x faster Neural Engine</strong> 
                            <br /> 
                            <span>performs nearly 35 trillion operations per second with 16 cores</span>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProchipSectionModal