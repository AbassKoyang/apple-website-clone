import React, { useEffect, useRef, useState } from 'react'
import { chameleonImg, chipImg, stylizedChipImg, trueIntelligenceImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { RiAddLine } from 'react-icons/ri'
import { ScrollTrigger } from 'gsap/all';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const images = [
  {
    id: 0,
    url: '',
    alt: ""
  },
  {
    id: 1,
    url: chameleonImg,
    alt: "Chameleon Image"
  },
  {
    id: 2,
    url: trueIntelligenceImg,
    alt: "Intelligence Image"
  },
  {
    id: 3,
    url: stylizedChipImg,
    alt: "Chip Image"
  },
  {
    id:4,
    url: chipImg,
    alt: "Chip Image"
  },
  
];

gsap.registerPlugin(ScrollTrigger);

const CameraSection = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    useGSAP(() => {
        gsap.to('#camera-section-heading', {
            opacity: 1,
            scrollTrigger: {
                trigger: '#camera-section-heading',
                toggleActions: "play none none none",
                start: 'top 70%',
                end: 'top 10%',
                scrub: true,
            }
        })
        gsap.to('#camera-section-text1', {
            opacity: 1,
            scrollTrigger: {
                trigger: '#camera-section-text1',
                toggleActions: "play play play play",
                start: 'top 70%',
                end: 'top 10%',
                scrub: true,
            }
        })
        gsap.to('#camera-section-chameleon-image', {
            scale: 1,
            scrollTrigger: {
                trigger: '#camera-section-chameleon-image',
                toggleActions: "play play play play",
                start: 'top 70%',
                end: 'top 40%',
                scrub: true,
            }
        })
    })

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#camera-section',
              start: "top 20%", // Start animation when the top of the element hits 80% of the viewport height
              end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport height
              toggleActions: "play none none reverse" // Play the animation on enter

            }
          });
        tl.to('#camera-section-button-id', {
            scale: 0.9,
        })
        .to('#camera-section-button-id', {
            borderWidth: 0,
            delay: 0.3,
            duration: 0.3,
        })
        .to('#camera-section-button-id', {
            width: 'auto',
            height: '56px',
            duration: 0.3,
            delay: 0.3,
        })
        .to('#camera-section-span-id', {
            scale: 1,
        })
        .to('#camera-section-span-id', {
            scale: 1,
        })
    }, [])

    const [imageInViewId, setImageInViewId] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const handleClickForward = () => {
        if(translateX > -1500){
            setTranslateX(prevTranslateX => prevTranslateX - 300);
        } else if(translateX <= -1500){
            setTranslateX(0);
        }else{
            null
        }
    };
    const handleClickBackward = () => {
        if(translateX < 0){
            setTranslateX(prevTranslateX => prevTranslateX + 300);
        }else if(translateX >= 0){
            setTranslateX(-1500);
        }else{
            null
        }
    };

    const handleCarousel = (direction) => {
        switch (direction) {
            case 'forward':
                if(imageInViewId >= 4){
                    setImageInViewId(0);
                } else {
                    setImageInViewId((prev) => prev + 1);                    
                }
                handleClickForward();
                break;
            case 'backward':
                if(imageInViewId <= 0 ){
                    setImageInViewId(0);
                } else {
                    setImageInViewId((prev) => prev - 1);
                }
                handleClickBackward();
                break;
            default:
                break;
        }
        console.log(imageInViewId)
    }
    

  return (
    <section className="common-padding">
        <div id="camera-section" className="screen-max-width flex-center flex-col relative">
            <div className="w-full max-w-[1054px] flex flex-col items-center">
                <h4 id='camera-section-heading' className='typography-site-headline-elevated text-left opacity-0'>
                A camera that captures your wildest imagination.
                </h4>
                <p id='camera-section-text1' className="typography-site-headline-reduced mt-[35px] md:mt-10 text-left opacity-0">From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.</p>
                {/* <div className="relative">
                    <img src={chameleonImg} alt="" />
                </div> */}
            </div>
            <div className="relative w-screen mt-[17px] mb-[60px] ml-[66px] overflow-clip">
                    <img id='camera-section-chameleon-image' className='w-[1314px] scale-125' src={chameleonImg} alt="A green iguana, captured by the 48MP Main camera" />
            </div>
            <div className="w-full flex-center mt-[-151px] mb-[168px] z-10">
                <div className="w-full max-w-[980px]">
                    <p className='p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray'>A green iguana, captured by the 48MP Main camera</p>
                </div>
            </div>
            <div className="w-full flex-center">
                <div className="w-full max-w-[980px]">
                    <p className='text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray md:max-w-[325px] lg:ml-28'>With iPhone 15 Pro, you have multiple focal lengths to work with. It’s like having <strong className='text-white font-semibold'>seven pro lenses in your pocket</strong>, everywhere you go.</p>
                </div>
            </div>

            <div className="min-w-full flex items-center h-screen overflow-hidden gap-5">
                {images.map((image, index) => (
                    <div className={`${image.id === imageInViewId ? 'w-[500px] h-[300px]' : 'w-[400px] h-[200px]'} bg-blue transition-all duration-300 ease-in-out flex-1`} style={{ transform: `translateX(${translateX}px)` }}>
                        {image.url ? (
                            <img className={`${image.id === imageInViewId ? 'opacity-1' : 'opacity-30'} w-full h-full transition-all duration-300 ease-in-out`} src={image.url} alt={image.alt} />
                        ) : null}
                    </div>
                ))}
            </div>
            <button onClick={() => handleCarousel('forward')}>Forward</button>
            <button onClick={() => handleCarousel('backward')}>Backward</button>
            <button onClick={() => setModalVisible(true)} id='camera-section-button-id' className='scale-0 size-[70px] border-[12px] border-blue mt-[50px] md:mt-[100px] sticky bottom-[30px] flex items-center bg-gray-300 backdrop-blur rounded-full group z-[500]'>
                <span id='camera-section-span-id' className="scale-0 ml-[32px] mr-[24px] text-[14px] md:text-[16px] leading-[1.381002381] font-semibold tracking-normal max-w-[30em] text-white">Zoom in on the camera</span>
                <span id='camera-section-span-id' className="scale-0 flex-center bg-[#0071e3] rounded-[50%] mr-[10px]">
                    <RiAddLine className="p-[2px] text-[36px] text-white opacity-80 group-hover:opacity-100 transition-all duration-200 ease-in-out" />
                </span>
            </button>

        </div>
    </section>
  )
}

export default CameraSection