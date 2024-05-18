import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const FullStory = () => {
    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#heading',
                toggleActions: "play reverse play reverse",
                start: 'top bottom'
            }
        })
    }, []);

  return (
    <section className="common-padding bg-zinc">
        <div className="screen-max-width">
            <h1 id='heading' className='section-heading'>Explore the full story.</h1>
        </div>
    </section>
  )
}

export default FullStory