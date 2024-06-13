import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { fullStoryModalCouplingVideo, fullStoryModalImage1img, fullStoryModalImage2img, fullStoryModalVideo, homeScreenImg, raindropImg, standByImg, trifectaImg, trueIntelligenceImg, wallPaperImg } from '../utils'
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
          toggleActions: "play play play reverse",
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
          toggleActions: 'play play play reverse',
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#fullstory-modal',
      }
  })
    gsap.to('#fullstory-modal-text2', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          trigger: '#fullstory-modal-text2',
          toggleActions: 'play play play reverse',
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#fullstory-modal',
      }
  })

  gsap.to('#fullstory-modal-text3', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text3',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})
  gsap.to('#fullstory-modal-text4', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text4',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})

  gsap.to('#fullstory-modal-text5', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text5',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})
  gsap.to('#fullstory-modal-text6', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text6',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})

  gsap.to('#fullstory-modal-text7', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text7',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})
  gsap.to('#fullstory-modal-text8', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text8',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})
  gsap.to('#fullstory-modal-text9', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text9',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})
  gsap.to('#fullstory-modal-text10', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-text10',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})

  gsap.to('#true-intelligence-image', {
    opacity: 1,
    scrollTrigger: {
        trigger: '#true-intelligence-image',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})

  gsap.to('#fullstory-modal-homescreen-img', {
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-homescreen-img',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})
  gsap.to('#fullstory-modal-lockscreen-img', {
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-lockscreen-img',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})
  gsap.to('#fullstory-modal-standby-img', {
    opacity: 1,
    scrollTrigger: {
        trigger: '#fullstory-modal-standby-img',
        toggleActions: "play play play reverse",
        start: 'top 70%',
        end: 'bottom 0%',
        scroller: '#fullstory-modal',
    }})

  }, [])
  return (
    <section id='fullstory-modal' className={` ${visible ? 'block top-0' : 'top-[100%]'} fixed z-[1000] right-0 w-screen h-screen flex justify-center bg-gray-300 backdrop-blur transition-all duration-500 ease-in-out pl-6 pr-6 md:pl-[25px] md:pr-3 py-16 overflow-y-scroll`}>

        <div className="w-full max-w-[375px] md:max-w-[1400px] h-fit bg-black rounded-3xl relative">
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

            <div className="w-full flex-center bg-zinc pt-[120px] px-12 md:px-0">
              <div id="fullstory-modal-scaled-images-con" className="w-full md:max-w-[720px] lg:max-w-[980px] grid grid-rows-2 md:grid-cols-2 md:gap-[50px]">
                <div className="row-span-1 md:col-span-1">
                  <div id='fullstory-modal-scaled-image-con' className="opacity-30 w-full h-[280px] md:h-[460px] object-contain bg-black flex-center pt-20 overflow-hidden">
                      <img id='fullstory-modal-scaled-image' className='scale-125 w-[106px] md:w-auto' src={fullStoryModalImage1img} alt="A side view of iPhone 15 Pro showing the fine‑brushed finish on the titanium bands" />

                  </div>
                  <p id='fullstory-modal-text1' className='typography-site-body-fullstory-modal translate-y-20 opacity-0 pb-[50px] md:pb-0 mt-[55px] lg:ml-20'>The <strong className='text-[#f5f5f7] font-semibold'>beautiful, fine‑brushed finish</strong> on the titanium bands is achieved through precision machining, sanding, brushing, and blasting.</p>
                </div>
                <div className="row-span-1 md:col-span-1">
                  <div id='fullstory-modal-scaled-image-con' className="opacity-30 w-full h-[280px] md:h-[460px] object-contain bg-black flex items-end justify-end pt-20 overflow-hidden">
                      <img id='fullstory-modal-scaled-image' className='scale-125 w-[200px] md:w-auto' src={fullStoryModalImage2img} alt="A close-up, front view of iPhone 15 Pro showing contoured edges and the thin border" />

                  </div>
                  <p id='fullstory-modal-text2' className='typography-site-body-fullstory-modal translate-y-20 opacity-0 pb-[50px] md:pb-0 mt-[55px] lg:ml-20'>New contoured edges and the thinnest borders ever on iPhone make it even <strong className='text-[#f5f5f7] font-semibold'>more comfortable to hold</strong> in your hand.</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-zinc pt-[60px] pb-[120px] px-12 md:px-0 flex-center flex-col">
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
                  <p id='fullstory-modal-text3' className='typography-site-body-fullstory-modal pb-[30px] md:pb-0  translate-y-20 opacity-0'>The titanium band is bonded with a new internal aluminum frame through solid‑state diffusion. This is an industry‑first innovation, using a thermomechanical process that <strong className='text-[#f5f5f7] font-semibold'>joins these two metals with incredible strength.</strong></p>
                </div>
                <div className="">
                  <p id='fullstory-modal-text4' className='typography-site-body-fullstory-modal  translate-y-20 opacity-0'>The internal frame is also made from <strong className='text-[#f5f5f7] font-semibold'>100% recycled aluminum</strong>, which contributes to our overall usage of recycled materials and helps us work toward our 2030 climate goals.</p>
                </div>
              </div>
            </div>

            <div className="pt-[120px] w-full flex-center px-12 md:px-0 bg-black">
              <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:items-start md:justify-between lg:justify-around md:max-w-[703.2px] lg:max-w-[980px]">
                <div className="">
                  <img className="mb-5" src={trifectaImg} alt="Trifecta icon" />
                  <h3 className='typography-headline-secondary max-w-[280px]'>Trifecta of tough.</h3>
                  <p id='fullstory-modal-text5' className='typography-site-body-fullstory-modal mt-5 translate-y-20 opacity-0'>A strong titanium band. The toughest back glass in a smartphone. And a Ceramic Shield front that’s even <strong className='text-[#f5f5f7] font-semibold'>tougher than any smartphone glass.</strong></p>
                </div>
                <div className="lg:ml-20 mt-[100px] md:mt-0">
                  <img className="mb-5" src={raindropImg} alt="Raindrop icon" />
                  <h3 className='typography-headline-secondary max-w-[280px]'>Remarkably resistant.</h3>
                  <p id='fullstory-modal-text6' className='typography-site-body-fullstory-modal mt-5 translate-y-20 opacity-0'>iPhone is <strong className='text-[#f5f5f7] font-semibold'>splash, water, and dust resistant.</strong> What a relief.</p>
                </div>
              </div>
            </div>

            <div className='w-full flex-center bg-black px-12 md:px-0'>
              <hr className='h-[1px] border-0 outline-0 w-full md:max-w-[703.2px] lg:max-w-[980px] bg-[#424245] my-[120px]' />
            </div>

            <div className="w-full flex-center bg-black px-12 md:px-0">
              <div className="w-full md:max-w-[703.2px] lg:max-w-[980px] border-b border-b-[#424245]">
                <h2 className='typography-headline-secondary md:ml-20 mb-[30px]'>A display of<br /> true intelligence.</h2>
                <p id='fullstory-modal-text7' className='text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray mt-5 translate-y-20 opacity-0 md:ml-20 max-w-[570px]'>iPhone 15 Pro has an <strong className='text-[#f5f5f7] font-semibold'>advanced Super Retina XDR display with ProMotion</strong>. It ramps up refresh rates to 120Hz when you need exceptional graphics performance. And ramps down to save power when you don’t.</p>
                <img id='true-intelligence-image' className='md:w-[583px] lg:w-auto md:ml-20 my-[60px] opacity-0' src={trueIntelligenceImg} alt="Phone 15 Pro playing the Apple TV+ show, Foundation, showcasing the Super Retina XDR display" />

                <div className="w-full grid grid-row-2 md:grid-cols-2 md:px-20 lg:px-0 md:gap-[50px]">
                  <div className="row-span-1 md:col-span-1 flex flex-col items-start justify-between">
                    <p id='fullstory-modal-text8' className='text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray lg:ml-20 md:max-w-[235px] max-w-[325px] translate-y-20 opacity-0'><strong className='text-[#f5f5f7] font-semibold'>Dynamic Island</strong> bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can easily track your next ride, sports scores, flight status, and more.</p>
                    <div className="w-full mt-[40px] md:mt-[60px] px-4 md:px-0 lg:ml-12 border-b border-b-[#424245]  md:border-0">
                    <img id="fullstory-modal-homescreen-img" className='opacity-0 md:w-[286px] lg:w-auto' src={homeScreenImg} alt="Iphone 15 homescreen image" />
                    </div>
                  </div>

                  <div className="row-span-1 md:col-span flex flex-col items-end justify-between mt-[85px] md:mt-0">
                    <p id='fullstory-modal-text9' className='text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray lg:ml-20 md:max-w-[235px] max-w-[325px] translate-y-20 opacity-0'>With the<strong className='text-[#f5f5f7] font-semibold'>Always-On display</strong>, your Lock Screen stays glanceable, so you don’t have to tap it to stay in the know. Using smart algorithms, iPhone detects when it’s in your pocket or face down and goes dark to save battery life.</p>
                    <div className="w-full mt-[40px] md:mt-[60px] px-4 md:px-0 lg:ml-12 border-b border-b-[#424245] md:border-b-0">
                    <img id="fullstory-modal-lockscreen-img" className='opacity-0 md:w-[286px] lg:w-auto' src={wallPaperImg} alt="Iphone 15 wallpaper image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="w-full flex-center bg-black px-12 md:px-0 py-[120px] rounded-b-3xl">
              <div className="w-full md:px-20 lg:px-0 md:max-w-[703.2px] max-w-[980px]">
                <h2 className='typography-headline-secondary lg:ml-20 mb-[30px]'>StandBy for<br /> something special.</h2>
                <div className="w-full pt-20 flex flex-col items-center justify-center">
                  <img id='fullstory-modal-standby-img' className='pb-[60px] md:w-[360px] lg:w-[504px] opacity-0' src={standByImg} alt="Stand by clock" />
                  <p id='fullstory-modal-text10' className='text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray max-w-[652px] translate-y-20 opacity-0'>StandBy <strong className='text-[#f5f5f7] font-semibold'>turns your iPhone into a new, full-screen experience</strong> with glanceable information you can see from a distance. Just set it on its side while charging to display the time, showcase your favorite photos, or keep an eye on your widgets. Thanks to the Always‑On display, it’s persistent. But at night, the screen dims so you can sleep easy.</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FullStoryModal