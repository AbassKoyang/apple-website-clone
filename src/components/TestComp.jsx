import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const TestComp = () => {

    useGSAP(() =>{
        gsap.to('#test', {
            opacity: 1,
            duration: 1,
            bottom: '80px',
            scrollTrigger: {
                trigger: 'test',
                start: 'top center',
            }
        })
    }, [])
  return (
    <section className='w-full h-screen screen-max-width relative flex flex-col justify-end items-center bg-white'>
        <h1 id='test' className='text-9xl font-bold text-red-600 sticky opacity-0'>Tessssssssssssst</h1>
    </section>
  )
}

export default TestComp