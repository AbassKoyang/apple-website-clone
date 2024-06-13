import React, { useEffect, useRef, useState } from 'react'
import { cameraSection48mpMainCameraImg, carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5, carouselImg6, carouselImg7, chameleonImg, chipImg, stylizedChipImg, trueIntelligenceImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { RiAddLine } from 'react-icons/ri'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md'
import { ScrollTrigger } from 'gsap/all';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import CameraSectionModal from './CameraSectionModal'

// const images = [
//   {
//     id: 0,
//     url: '',
//     alt: ""
//   },
//   {
//     id: 1,
//     url: chameleonImg,
//     alt: "Chameleon Image"
//   },
//   {
//     id: 2,
//     url: trueIntelligenceImg,
//     alt: "Intelligence Image"
//   },
//   {
//     id: 3,
//     url: stylizedChipImg,
//     alt: "Chip Image"
//   },
//   {
//     id:4,
//     url: chipImg,
//     alt: "Chip Image"
//   },
  
// ];

gsap.registerPlugin(ScrollTrigger);

const CameraSection = () => {
    // States
    const [isModalVisible, setModalVisible] = useState(false);
    const [carouselLabel, setCarouselLabel] = useState('');
    const [carouselIndex, setCarouselIndex] = useState(0);

    // useEffect to change the carousel description when the image in view is changed
    useEffect(() => {
        switch (carouselIndex) {
          case 0:
              setCarouselLabel(<p className={`m-0 p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray transition-all duration-300 ease-in-out ${carouselIndex === 0 ? 'opacity-100' : 'opacity-0'}`}><strong className="text-[#f5f5f7] font-semibold">0.5x</strong> Ultra Wide | Macro</p>);
              break;
          case 1:
              setCarouselLabel(<p className={`m-0 p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray transition-all duration-300 ease-in-out ${carouselIndex === 1 ? 'opacity-100' : 'opacity-0'}`}><strong className="text-[#f5f5f7] font-semibold">1x</strong> Main | 24mm</p>);
              break;
          case 2:
              setCarouselLabel(<p className={`m-0 p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray transition-all duration-300 ease-in-out ${carouselIndex === 2 ? 'opacity-100' : 'opacity-0'}`}><strong className="text-[#f5f5f7] font-semibold">1x</strong> Main | 28mm</p>);
              break;
          case 3:
              setCarouselLabel(<p className={`m-0 p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray transition-all duration-300 ease-in-out ${carouselIndex === 3 ? 'opacity-100' : 'opacity-0'}`}><strong className="text-[#f5f5f7] font-semibold">1x</strong> Main | 35mm</p>);
              break;
          case 4:
              setCarouselLabel(<p className={`m-0 p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray transition-all duration-300 ease-in-out ${carouselIndex === 4 ? 'opacity-100' : 'opacity-0'}`}><strong className="text-[#f5f5f7] font-semibold">2x</strong> Telephoto | 48mm</p>);
              break;
          case 5:
              setCarouselLabel(<p className={`m-0 p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray transition-all duration-300 ease-in-out ${carouselIndex === 5 ? 'opacity-100' : 'opacity-0'}`}><strong className="text-[#f5f5f7] font-semibold">New 5x</strong> Telephoto | 120 mm</p>);
              break;
        
          default:
              setCarouselLabel(<p className={`m-0 p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray transition-all duration-300 ease-in-out ${carouselIndex === 0 ? 'opacity-100' : 'opacity-0'}`}><strong className="text-[#f5f5f7] font-semibold">0.5x</strong> Ultra Wide | Macro</p>)
              break;
        }
      }, [carouselIndex])

    //   functions to increment or decrement carouselindex  when the next or previous buttons are clicked
      const handleCarouselNextButtonClick = () => {
        setCarouselIndex((prev) => prev + 1);
      }
      const handleCarouselPrevButtonClick = () => {
        setCarouselIndex((prev) => prev - 1);
      }

    //Gsap Animations
    useGSAP(() => {
        gsap.to('#camera-section-heading', {
            opacity: 1,
            scrollTrigger: {
                trigger: '#camera-section-heading',
                start: 'top 80%',
                end: 'top 40%',
                scrub: true,
            }
        })
        gsap.to('#camera-section-text1', {
            opacity: 1,
            scrollTrigger: {
                trigger: '#camera-section-heading',
                start: 'top 80%',
                end: 'top 40%',
                scrub: true,
            }
        })
        gsap.to('#camera-section-text2', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#camera-section-text2',
                toggleActions: "play play play reverse",
                start: 'top 70%',
                end: 'bottom 0%',
            }
        })
        gsap.to('#camera-section-text3', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#camera-section-text3',
                toggleActions: "play play play reverse",
                start: 'top 70%',
                end: 'bottom 0%',
            }
        })
        gsap.to('#camera-section-text4', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#camera-section-text4',
                toggleActions: "play play play reverse",
                start: 'top 70%',
                end: 'bottom 0%',
            }
        })
        gsap.to('#camera-section-chameleon-image', {
            scale: 1,
            scrollTrigger: {
                trigger: '#camera-section-chameleon-image',
                start: 'top 80%',
                end: 'top 40%',
                scrub: true,
            }
        })
        gsap.to('#camera-section-iphone-image1', {
            opacity: 1,
            scrollTrigger: {
                trigger: '#camera-section-iphone-image1',
                toggleActions: "play play play reverse",
                start: 'top 70%',
                end: 'bottom 0%',
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

    // const [imageInViewId, setImageInViewId] = useState(0);
    // const [translateX, setTranslateX] = useState(0);

    // const handleClickForward = () => {
    //     if(translateX > -1500){
    //         setTranslateX(prevTranslateX => prevTranslateX - 300);
    //     } else if(translateX <= -1500){
    //         setTranslateX(0);
    //     }else{
    //         null
    //     }
    // };
    // const handleClickBackward = () => {
    //     if(translateX < 0){
    //         setTranslateX(prevTranslateX => prevTranslateX + 300);
    //     }else if(translateX >= 0){
    //         setTranslateX(-1500);
    //     }else{
    //         null
    //     }
    // };

    // const handleCarousel = (direction) => {
    //     switch (direction) {
    //         case 'forward':
    //             if(imageInViewId >= 4){
    //                 setImageInViewId(0);
    //             } else {
    //                 setImageInViewId((prev) => prev + 1);                    
    //             }
    //             handleClickForward();
    //             break;
    //         case 'backward':
    //             if(imageInViewId <= 0 ){
    //                 setImageInViewId(0);
    //             } else {
    //                 setImageInViewId((prev) => prev - 1);
    //             }
    //             handleClickBackward();
    //             break;
    //         default:
    //             break;
    //     }
    //     console.log(imageInViewId)
    // }
    

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
            <div className="relative w-screen mt-[17px] mb-[60px] md:ml-[66px] overflow-clip">
                    <img id='camera-section-chameleon-image' className='md:w-[1314px] scale-125' src={chameleonImg} alt="A green iguana, captured by the 48MP Main camera" />
            </div>
            <div className="w-full flex-center mt-[-53px] md:mt-[-116px] lg:mt-[-151px] mb-[94px] md:mb-[138px] lg:mb-[168px] z-10">
                <div className="w-full max-w-[980px] flex-center md:block">
                    <p className='p-0 text-[16px] md:text-[19px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray max-w-[280px] md:max-w-fit md:ml-10 lg:ml-0'>A green iguana, captured by the 48MP Main camera</p>
                </div>
            </div>
            <div className="w-full flex-center">
                <div className="w-full flex-center md:block max-w-[980px]">
                    <p id='camera-section-text2' className='text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray max-w-[280px] md:max-w-[325px] md:ml-10 lg:ml-40 opacity-0 translate-y-20'>With iPhone 15 Pro, you have multiple focal lengths to work with. It’s like having <strong className='text-white font-semibold'>seven pro lenses in your pocket</strong>, everywhere you go.</p>
                </div>
            </div>

            {/* <div className="min-w-full flex items-center h-screen overflow-hidden gap-5">
                {images.map((image, index) => (
                    <div className={`${image.id === imageInViewId ? 'w-[500px] h-[300px]' : 'w-[400px] h-[200px]'} bg-blue transition-all duration-300 ease-in-out flex-1`} style={{ transform: `translateX(${translateX}px)` }}>
                        {image.url ? (
                            <img className={`${image.id === imageInViewId ? 'opacity-1' : 'opacity-30'} w-full h-full transition-all duration-300 ease-in-out`} src={image.url} alt={image.alt} />
                        ) : null}
                    </div>
                ))}
            </div>
            <button onClick={() => handleCarousel('forward')}>Forward</button>
            <button onClick={() => handleCarousel('backward')}>Backward</button> */}

            <div className="w-screen h-fit pt-[27px] md:pt-[60px]">
                            <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={false}
                    navigation={{
                        nextEl: '.carousel-next-button',
                        prevEl: '.carousel-prev-button',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    className="w-full"
                    aria-label='Carousel'
                >
                    <SwiperSlide  className="w-[274px] h-[365px] md:w-[653px] md:h-[490px]">
                    <img className="w-full h-full object-cover" src={carouselImg1} />
                    </SwiperSlide>
                    <SwiperSlide  className="w-[274px] h-[365px] md:w-[653px] md:h-[490px]">
                    <img className="w-full h-full object-cover" src={carouselImg2} />
                    </SwiperSlide>
                    <SwiperSlide  className="w-[274px] h-[365px] md:w-[653px] md:h-[490px]">
                    <img className="w-full h-full object-cover" src={carouselImg3} />
                    </SwiperSlide>
                    <SwiperSlide  className="w-[274px] h-[365px] md:w-[653px] md:h-[490px]">
                    <img className="w-full h-full object-cover" src={carouselImg4} />
                    </SwiperSlide>
                    <SwiperSlide  className="w-[274px] h-[365px] md:w-[653px] md:h-[490px]">
                    <img className="w-full h-full object-cover" src={carouselImg5} />
                    </SwiperSlide>
                    <SwiperSlide  className="w-[274px] h-[365px] md:w-[653px] md:h-[490px]">
                    <img className="w-full h-full object-cover" src={carouselImg6} />
                    </SwiperSlide>
                    <SwiperSlide  className="w-[274px] h-[365px] md:w-[653px] md:h-[490px]">
                    <img className="w-full h-full object-cover" src={carouselImg7} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full flex md:items-center justify-center max-w-[980px] relative mt-10">
                {carouselLabel}
                <div className="flex gap-4 items-center mt-16 md:mt-0 absolute top-[50%] md:translate-y-[-50%] right-5 md:right-0">
                    <button onClick={handleCarouselNextButtonClick} disabled={carouselIndex >= 5} aria-label='Next button' aria-description='Click this button to move to the next carousel slide' className='carousel-prev-button rounded-full bg-[#333336] size-[38px] flex-center disabled:opacity-50'>
                        <title>Next button</title>
                        <MdOutlineChevronLeft className='text-[35px] m-0 p-0' />
                    </button>
                    <button onClick={handleCarouselPrevButtonClick} disabled={carouselIndex <= 0} aria-label='Previous button' aria-description='Click this button to move to the previous carousel slide' className='carousel-next-button rounded-full bg-[#333336] size-[38px] flex-center disabled:opacity-50'>
                        <title>Previous button</title>
                        <MdOutlineChevronRight className='text-[35px] m-0 p-0' />
                    </button>
                </div>
            </div>

            <div className="w-full flex justify-around max-w-[980px] py-[70px] md:py-[100px]">
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[45px] md:gap-[60px] lg:gap-[80px] pt-[80px] md:py-[60px]">
                    <div className="">
                        <img id='camera-section-iphone-image1' className='w-[275px] md:w-auto opacity-0' src={cameraSection48mpMainCameraImg} alt="An iPhone 15 Pro showing a photo of a person being taken using 2x optical zoom" />
                    </div>
                    <div className="typography-site-body max-w-[280px] md:max-w-[325px]">
                        <p id='camera-section-text3' className='opacity-0 translate-y-20'>The 48MP Main camera is more advanced than ever, capturing super‑high‑resolution photos with a <strong className='text-[#f5f5f7] font-semibold'>new level of detail and color</strong>.</p>
                        <p id='camera-section-text4' className='mt-4 md:mt-5 opacity-0 translate-y-20'>You’ll see the improvements in your portraits. And now you no longer have to switch to Portrait mode. If your subject is a person, dog, or cat, iPhone automatically captures depth information. So you can choose to instantly <strong className='text-[#f5f5f7] font-semibold'>see your photo as a portrait</strong>, with an artful blur effect. Or later in the Photos app.</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex-center bg-black border-t border-t-[#424245] outline-0 max-w-[692px] md:max-w-[980px]'>
                <strong className='mt-[100px] md:mt-[135px] lg:mt-[161px] text-[32px] md:text-[40px] leading-[1.125] md:leading-[1.1] font-semibold tracking-[.004em] md:tracking-[0em] text-[#f5f5f7] max-w-[280px] md:max-w-[692px] lg:max-w-[980px] text-center'>
                    Shoot magical spatial videos,
                    <br />then relive them on Apple Vision Pro
                </strong>
            </div>

            <button onClick={() => setModalVisible(true)} id='camera-section-button-id' className='scale-0 size-[70px] border-[12px] border-blue mt-[50px] md:mt-[100px] sticky bottom-[30px] flex items-center bg-gray-300 backdrop-blur rounded-full group z-[500]'>
                <span id='camera-section-span-id' className="scale-0 ml-[32px] mr-[24px] text-[14px] md:text-[16px] leading-[1.381002381] font-semibold tracking-normal max-w-[30em] text-white">Zoom in on the camera</span>
                <span id='camera-section-span-id' className="scale-0 flex-center bg-[#0071e3] rounded-[50%] mr-[10px]">
                    <RiAddLine className="p-[2px] text-[36px] text-white opacity-80 group-hover:opacity-100 transition-all duration-200 ease-in-out" />
                </span>
            </button>
        </div>

        <CameraSectionModal visible={isModalVisible} handleClick={() => setModalVisible(false)}/>
    </section>
  )
}

export default CameraSection