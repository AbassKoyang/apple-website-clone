import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { cameraSectionModalImg1, cameraSectionModalImg2, cameraSectionModalImg3, cameraSectionModalImg4, cameraSectionModalImg5, cameraSectionModalImg6, cameraSectionModalImg7 } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CameraSectionModal = ({visible, handleClick}) => {

  useGSAP(()=> {
    gsap.to('#camera-section-modal-text1', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          trigger: '#camera-section-modal-text1',
          toggleActions: "play play play reverse",
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#camera-section-modal',
      }
    })
    gsap.to('#camera-section-modal-text2', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          trigger: '#camera-section-modal-text2',
          toggleActions: "play play play reverse",
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#camera-section-modal',
      }
    })
    gsap.to('#camera-section-modal-text3', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          trigger: '#camera-section-modal-text3',
          toggleActions: "play play play reverse",
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#camera-section-modal',
      }
   })
    gsap.to('#camera-section-modal-text4', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          trigger: '#camera-section-modal-text4',
          toggleActions: "play play play reverse",
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#camera-section-modal',
    }})
    gsap.to('#camera-section-modal-text5', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          trigger: '#camera-section-modal-text5',
          toggleActions: "play play play reverse",
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#camera-section-modal',
    }})
    gsap.to('#camera-section-modal-text6', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          trigger: '#camera-section-modal-text6',
          toggleActions: "play play play reverse",
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#camera-section-modal',
    }})
    gsap.to('#camera-section-modal-text7', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
          trigger: '#camera-section-modal-text7',
          toggleActions: "play play play reverse",
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#camera-section-modal',
    }})



    // Image animations
    gsap.to('#camera-section-modal-image7', {
      opacity: 1,
      scrollTrigger: {
          trigger: '#camera-section-image7',
          toggleActions: "play play play reverse",
          start: 'top 70%',
          end: 'bottom 0%',
          scroller: '#camera-section-modal',
    }})
  }, [])
  return (
    <section id='camera-section-modal' className={`${visible ? 'block top-0' : 'top-[100%]'} fixed z-[1000] right-0 w-screen h-screen flex justify-center bg-gray-300 backdrop-blur transition-all duration-500 ease-in-out pl-6 pr-6 md:pl-[25px] md:pr-3 py-16 overflow-y-scroll`}>

        <div className="w-full max-w-[375px] md:max-w-[1400px] h-fit bg-black rounded-3xl relative flex-center flex-col pb-[100px]">
            <div className="w-full p-0 m-0 flex justify-end sticky top-0">
                <button onClick={handleClick} aria-label='close modal' className='mt-[15px] mr-[15px] p-1 bg-[#333336] flex-center rounded-full transition-all duration-300 ease-in-out group'>
                    <RiCloseFill  className="text-[#f5f5f7] group-hover:text-white text-[25px]" />
                </button>
            </div>

            <div className="w-full flex-center flex-col relative mb-[100px] lg:mb-[120px]">
              <div className="w-full flex-center md:max-w-[703.2px] lg:max-w-[980px] md:absolute md:top-[100px] md:left-[50%] md:translate-x-[-50%] md:pr-20">
                <h1 className='mx-4 md:ml-20 max-w-[280px] md:max-w-[530px] lg:max-w-full text-[40px] md:text-[48px] lg:text-[64px] text-[#F5F5F7] font-semibold leading-[1.1] md:leading-[1.0834933333] lg:leading-[1.0625] tracking-[0em] md:tracking-[-0.003em] lg:tracking-[-0.009em] '>A camera that captures your wildest imagination.</h1>
              </div>
              <img className='w-[400px] md:w-[1048px] md:h-[698px] lg:h-fit lg:w-[1420px] md:object-cover' src={cameraSectionModalImg1} alt="A beautiful photo shot on the iphone 15 pro of a woman laying closely to her reflection in rippled water on a black background"/>
            </div>

            <div className="w-full flex-center px-12 md:px-[50px] lg:px-0">
              <div className="w-fullmd:max-w-[703.2px] lg:max-w-[980px] max-w-[980px] grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-[2px]">
                <div className="row-span-1 md:col-span-1">
                  <img className="md:w-[289px] lg:w-full" src={cameraSectionModalImg2} alt="Iphone camera" />
                </div>
                <div className="row-span-1 md:col-span-1">
                  <div className="md:ml-[60px] lg:ml-20">
                    <h3 className="typography-headline-secondary mb-[30px]">48MP camera. Mega <br /> powerful.</h3>
                    <p id="camera-section-modal-text1" className='opacity-0 translate-y-20 mt-4 text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray md:max-w-[350px] lg:max-w-[325px]'>The advanced quad‑pixel sensor makes the most of 48 megapixels by adapting to what you’re shooting, so you get <strong className='text-[#f5f5f7] font-semibold'>low‑light photos with phenomenal detail</strong>. It also lets you scoot in closer with an additional 2x Telephoto.</p>
                    <p id="camera-section-modal-text2" className='opacity-0 translate-y-20 mt-4 text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray md:max-w-[350px] lg:max-w-[325px]'>The new Photonic Engine combines the best pixels from a super‑high‑resolution image with another that’s optimized for light capture. So <strong className='text-[#f5f5f7] font-semibold'>you automatically get 24MP photos</strong>— that’s twice the resolution than before — for everyday shots with extra detail.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex-center mt-[100px] md px-2 md:px-[50px] lg:px-0">
              <div className="w-full md:max-w-[703.2px] lg:max-w-[980px]">
                <img className='w-full mb-[60px]' src={cameraSectionModalImg3} alt="An image of a  dark-skined model on afro shot by the iphone 15 pro" />
                <div className="w-full flex flex-col md:flex-row justify-center md:justify-between lg:justify-around px-8 md:px-0">
                <p id="camera-section-modal-text3" className='opacity-0 translate-y-20 text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray md:max-w-[280px] lg:max-w-[325px]'>For the moments when you want to prioritize detail, you have<strong className='text-[#f5f5f7] font-semibold'> more pro options to choose from</strong>.</p>

                <p id="camera-section-modal-text4" className='opacity-0 translate-y-20 text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray md:max-w-[280px] lg:max-w-[325px] mt-5 md:mt-0'><strong className='text-[#f5f5f7] font-semibold'>48MP HEIF gives you four times more resolution than before</strong>, in a format that’s ready to share. Or shoot in 48MP ProRAW for precise control over color, detail, and dynamic range.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex-center mt-[100px] md:mt-[120px] py-[100px] md:py-[120px] px-12 md:px-[50px] lg:px-0 bg-zinc">
              <div className="w-full md:max-w-[703.2px] lg:max-w-[980px]">
                <div className="lg:ml-28">
                  <h3 className='typography-headline-secondary mb-[30px] max-w-[290px] lg:max-w-full'>What’s your Main mm?</h3>
                  <p id="camera-section-modal-text5" className=' text-[16px] md:text-[21px] leading-[1.381002381] font-semibold tracking-[.0113em] text-gray max-w-[280px] md:max-w-[330px] lg:max-w-[500px] mt-4 mb-10 lg:mb-[60px]'>Now you can choose your default Main camera lens —<strong className='text-[#f5f5f7] font-semibold'> 24 mm, 28 mm, or 35 mm</strong>all without having to carry around extra gear. That’s the power of computational photography.</p>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-center md:justify-between gap-[26px] md:gap-0">
                  <div className="">
                    <img className="w-[281px] md:w-[224px] lg:w-[310px]" src={cameraSectionModalImg4} alt="A photoshoot in 24mm of a woman" />
                    <p className='text-[16px] md:text-[21px] leading-[1.4211026316] font-semibold tracking-[.012em] text-gray mt-4'>24 mm</p>
                  </div>
                  <div className="">
                    <img className="w-[281px] md:w-[224px] lg:w-[310px]" src={cameraSectionModalImg5} alt="A photoshoot in 24mm of a woman" />
                    <p className='text-[16px] md:text-[21px]   leading-[1.4211026316] font-semibold tracking-[.012em] text-gray mt-4'>28 mm</p>
                  </div>
                  <div className="">
                    <img className="w-[281px] md:w-[224px] lg:w-[310px]" src={cameraSectionModalImg6} alt="A photoshoot in 24mm of a woman" />
                    <p className='text-[16px] md:text-[21px] leading-[1.4211026316] font-semibold tracking-[.012em] text-gray mt-4'>35 mm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex-center mt-[100px] md:mt-[120px] px-12 md:px-[50px] lg:px-0">
              <div className="w-full md:max-w-[703.2px] lg:max-w-[980px]">
              <h3 className='typography-headline-secondary mb-[30px] max-w-[290px] lg:max-w-full'>Next‑generation portraits.</h3>
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[45px] md:gap-[60px] lg:gap-[80px] pt-[80px] md:py-[60px]">
                    <div className="">
                        <img id='camera-section-modal-image7' className='w-[275px] md:w-auto opacity-0' src={cameraSectionModalImg7} alt="An iPhone 15 Pro showing a photo of a person being taken using 2x optical zoom" />
                    </div>
                    <div className="typography-site-body max-w-[280px] md:max-w-[325px]">
                        <p id='camera-section-modal-text6' className='opacity-0 translate-y-20'>The 48MP Main camera is more advanced than ever, capturing super‑high‑resolution photos with a <strong className='text-[#f5f5f7] font-semibold'>new level of detail and color</strong>.</p>
                        <p id='camera-section-modal-text7' className='mt-4 md:mt-5 opacity-0 translate-y-20'>You’ll see the improvements in your portraits. And now you no longer have to switch to Portrait mode. If your subject is a person, dog, or cat, iPhone automatically captures depth information. So you can choose to instantly <strong className='text-[#f5f5f7] font-semibold'>see your photo as a portrait</strong>, with an artful blur effect. Or later in the Photos app.</p>
                    </div>
                </div>
              </div>
            </div>

        </div>

    </section>
  )
}

export default CameraSectionModal