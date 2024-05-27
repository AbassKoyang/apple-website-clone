import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { fullStoryModalCouplingVideo, fullStoryModalImage1img, fullStoryModalImage2img, fullStoryModalVideo } from '../utils'
import { ScrollTrigger } from 'gsap/all';
import { MdOutlinePauseCircleOutline, MdOutlineReplay } from 'react-icons/md'

gsap.registerPlugin(ScrollTrigger);

const FullStoryModal = ({visible, handleClick}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const couplingVideoRef = useRef(null);

  const togglePlayback = () => {
    if (isPlaying) {
      couplingVideoRef.current.pause();
    } else {
      couplingVideoRef.current.play();
    }
  };

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const videoElement = couplingVideoRef.current;
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
    };
  }, []);


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#fullstory-modal-scaled-images-con',
        toggleActions: "play reverse play reverse",
        start: 'top center',
        scroller: '#fullstory-modal'
      }
    })
    tl.to('#fullstory-modal-scaled-image-con', {
      opacity: 1,
      duration: 0.5,
    })
    .to('#fullstory-modal-scaled-image', {
      scale: 1,
      duration: 0.5,
  })
  gsap.to('#fullstory-modal-text1', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text1',
        toggleActions: "play reverse play reverse",
        start: 'top 60%',
        end: 'top 0%',
        scroller: '#fullstory-modal',
    }
})
  }, [])
  return (
    <section id='fullstory-modal' className={` ${visible ? 'block top-0' : 'top-[100%]'} fixed right-0 w-screen h-screen bg-gray-300 backdrop-blur transition-all duration-500 ease-in-out pl-[26px] pr-5 py-10 overflow-y-scroll`}>

        <div className="w-full h-fit bg-black rounded-3xl relative">
            <div className="p-0 m-0 flex justify-end sticky top-0">
                <button onClick={ handleClick} aria-label='close modal' className='mt-[15px] mr-[15px] p-1 bg-[#333336] flex-center rounded-full transition-all duration-300 ease-in-out group'>
                    <RiCloseFill  className="text-[#f5f5f7] group-hover:text-white text-[25px]" />
                </button>
            </div>
            <div className="w-full bg-black">
              <h1 className='ml-20 lg:ml-60 max-w-[200px] md:max-w-max text-[35px] md:text-[60px] text-[#F5F5F7] font-semibold leading-[1.1] md:leading-[1] tracking-[0em] md:tracking-[-0.015em] pt-[60px]'>iPhone. <br />Forged in titanium.</h1>
              <div className="w-full h-full bg-black mt-14 mb-[120px]">
                <video className='pointer-events-none' preload='auto' autoPlay playsInline muted key={fullStoryModalVideo}>
                    <source src={fullStoryModalVideo} type='video/mp4'/>
                </video>
              </div>
            </div>

            <div className="w-full flex-center bg-zinc pt-[120px]">
              <div id="fullstory-modal-scaled-images-con" className="w-[87.5%] md:w-full max-w-[312px] md:max-w-[720px] lg:max-w-[980px] grid grid-row-2 md:grid-cols-2 md:gap-[50px]">
                <div className="row-span-1 md:col-span-1">
                  <div id='fullstory-modal-scaled-image-con' className="opacity-30 w-full h-[460px] object-contain bg-black flex-center pt-20 overflow-hidden">
                      <img id='fullstory-modal-scaled-image' className='scale-125' src={fullStoryModalImage1img} alt="A picture of the iphone 15 camera" />

                  </div>
                  <p id='fullstory-modal-text1' className='typography-site-body-fullstory-modal translate-y-20 opacity-0 pb-[50px] md:pb-0 mt-[55px] lg:ml-20'>The <strong className='text-[#f5f5f7] font-semibold'>beautiful, fine‑brushed finish</strong> on the titanium bands is achieved through precision machining, sanding, brushing, and blasting.</p>
                </div>
                <div className="row-span-1 md:col-span-1">
                  <div id='fullstory-modal-scaled-image-con' className="opacity-30 w-full h-[460px] object-contain bg-black flex items-end justify-end pt-20 overflow-hidden">
                      <img id='fullstory-modal-scaled-image' className='scale-125' src={fullStoryModalImage2img} alt="A picture of the iphone 15 camera" />

                  </div>
                  <p id='fullstory-modal-text1' className='typography-site-body-fullstory-modal translate-y-20 opacity-0 pb-[50px] md:pb-0 mt-[55px] lg:ml-20'>New contoured edges and the thinnest borders ever on iPhone make it even <strong className='text-[#f5f5f7] font-semibold'>more comfortable to hold</strong> in your hand.</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-zinc pt-[60px] pb-[120px] px-5 md:px-0 flex-center flex-col">
              <div className="w-full bg-black max-w-[980px]">
                <video ref={couplingVideoRef} className='pointer-events-none' preload='auto' autoPlay playsInline muted key={fullStoryModalCouplingVideo}>
                    <source src={fullStoryModalCouplingVideo} type='video/mp4'/>
                </video>
              </div>
              <button onClick={togglePlayback} className='text-gray py-8 px-0 bg-transparent outline-0 border-0 flex-center gap-2'>
                <p>{isPlaying ? 'Pause' : 'Replay'}</p>
                {isPlaying ? (<MdOutlinePauseCircleOutline />) : (<MdOutlineReplay />)}
              </button>

              <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:items-start md:justify-around max-w-[980px] mt-[60px]">
                <div className="">
                  <p id='fullstory-modal-text1' className='typography-site-body-fullstory-modal pb-[30px] md:pb-0 lg:ml-20'>The titanium band is bonded with a new internal aluminum frame through solid‑state diffusion. This is an industry‑first innovation, using a thermomechanical process that <strong className='text-[#f5f5f7] font-semibold'>joins these two metals with incredible strength.</strong></p>
                </div>
                <div className="">
                  <p id='fullstory-modal-text1' className='typography-site-body-fullstory-modal lg:ml-20'>The internal frame is also made from <strong className='text-[#f5f5f7] font-semibold'>100% recycled aluminum</strong>, which contributes to our overall usage of recycled materials and helps us work toward our 2030 climate goals.</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FullStoryModal