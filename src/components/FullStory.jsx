import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

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
    }, []);

  return (
    <section className="common-padding bg-zinc">
        <div className="screen-max-width">
            <h2 id='full-story' className='section-heading'>Explore the full story.</h2>
            <div className="subsection pt-[200px] pb-[270px]" id="subsection">
                <h1 className='text-[80px] text-white font-semibold line tracking-[-0.015em]'>iPhone. <br />Forged in titanium.</h1>
            </div>
        </div>
    </section>
  )
}

export default FullStory