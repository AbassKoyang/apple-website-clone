import React from 'react'
import { RiCloseFill } from 'react-icons/ri'

const CameraSectionModal = ({visible, handleClick}) => {
  return (
    <section id='prochip-section-modal' className={`${visible ? 'block top-0' : 'top-[100%]'} fixed z-[1000] right-0 w-screen h-screen flex justify-center bg-gray-300 backdrop-blur transition-all duration-500 ease-in-out pl-6 pr-6 md:pl-[25px] md:pr-3 py-16 overflow-y-scroll`}>

        <div className="w-full max-w-[375px] md:max-w-[1400px] h-fit bg-black rounded-3xl relative flex-center flex-col pb-[100px]">
            <div className="w-full p-0 m-0 flex justify-end sticky top-0">
                <button onClick={handleClick} aria-label='close modal' className='mt-[15px] mr-[15px] p-1 bg-[#333336] flex-center rounded-full transition-all duration-300 ease-in-out group'>
                    <RiCloseFill  className="text-[#f5f5f7] group-hover:text-white text-[25px]" />
                </button>
            </div>
        </div>

    </section>
  )
}

export default CameraSectionModal