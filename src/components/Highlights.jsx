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
    }, yoyo: true, yoyoEase: true})
  }, [])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className="screen-max-width">
          <h1 id="title" className="sticky top-7 section-heading">Get the highlights.</h1>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights