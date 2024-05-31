import React from 'react'
import { chipImg, frameImg } from '../utils'

const ProchipSection = () => {
  return (
    <section className="common-padding bg-black">
        <div className="screen-max-width flex-center">
            <div className="w-full max-w-[1054px] flex flex-col items-center">
                <img className='w-[180px]' src={chipImg}  alt="A17 pro chip" />
                <h4 className='typography-site-headline-elevated mt-[45px] md:mt-[70px] lg:mt-[100px]'>A17 Pro chip.<br />A monster win for gaming.</h4>
                <p className="typography-site-headline-reduced mt-[35px] md:mt-10">It’s here. The biggest redesign in the history of Apple GPUs.</p>
                <div className="w-full mt-10">
                    <img className='w-full' src={frameImg} alt="Iphone 15 Pro frame" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProchipSection