import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
import gsap from 'gsap';

import {rightImg, watchImg} from '../utils/index'
import VideoCarousel from '../components/VideoCarousel';

gsap.registerPlugin(ScrollTrigger);
const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {opacity: 1, y: 0, scrollTrigger: {
      trigger: '#title',
      toggleActions: "play reverse play reverse",
      start: 'top bottom'
    },})
  }, [])
  return (
    <section id='highlights' className='w-screen overflow-x-hidden sm:py-[200px] py-[100px] sm:px-10 bg-zinc'>
      <div className="screen-max-width">
          <h2 id="title" className="section-heading px-5 md:px-0">Get the highlights.</h2>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights