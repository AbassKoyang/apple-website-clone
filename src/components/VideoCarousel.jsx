import {useEffect, useRef, useState} from 'react';
import {hightlightsSlides} from '../constants/index';
import { pauseImg, playImg, replayImg } from '../utils';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    })
    const [loadedData, setLoadedData] = useState([]);

    const {isEnd, startPlay, videoId, isLastVideo, isPlaying} = video;

    useGSAP(()=> {
        gsap.to('#video', {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: 'restart none none none'
            },
            onComplete: () => {
                setVideo((pre) => ({...pre, startPlay: true, isPlaying: true}))
            }
        })
        gsap.to('#slider', {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: 'power2.inOut'
        })
    }, [isEnd, videoId])

    useGSAP(() => {
        gsap.to('#video-control', {
            borderWidth: '0px',
            translateY: 0, 
            scrollTrigger: {
                trigger: '#slider-con',
                start: 'top top',
            }
        })
        gsap.to('#control-btn', {
            scale: 1,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '#slider-con',
                start: "top top",
            }
        })
        gsap.to('#progress-con', {
            scale: 1,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '#slider-con',
                start: "top top",
            }
        })
        gsap.to('#progress-con', {
            translateX: 0,
            delay: 0.5,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '#slider-con',
                start: "top top",
            }
        })
        gsap.to('#control-btn', {
            translateX: 0,
            delay: 0.5,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '#slider-con',
                start: "top top",
            }
        })
        gsap.to('#progress-con', {
            width: 'auto',
            height: 'auto',
            delay: 0.5,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '#slider-con',
                start: "top top",
            }
        })
        
        // gsap.to('#control-btn', {
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     translateX: 0,
        //     delay: 2,
        //     duration: 2,
        //     ease: 'none',
        // })
        // gsap.to('#progress-con', {
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     translateX: 0,
        //     delay: 2,
        //     duration: 2,
        //     ease: 'none',
        // })
    }, [])

    useEffect(() => {
      if(loadedData.length > 3 ){
         if (!isPlaying) {
            videoRef.current[videoId].pause();
         } else {
            startPlay && videoRef.current[videoId].play();
         }
      }
    }, [startPlay, videoId, isPlaying, loadedData])
    
const handleLoadedMetadata = (i, e) => {
    setLoadedData((pre) => [...pre, e])
};
    useEffect(() => {
      let currentProgress = 0;
      let span = videoSpanRef.current;

      if (span[videoId]) {
        //animate the progress of the video
        let anim = gsap.to(span, {
            onUpdate: () => {
                const progress = Math.ceil(anim.progress() * 100)

                if (progress != currentProgress) {
                    currentProgress = progress

                    gsap.to(videoDivRef.current[videoId], {
                        width: window.innerWidth < 760
                        ? '10vw' 
                        : window.innerWidth < 1200
                        ? '10vw' 
                        : '4vw',
                    })

                    gsap.to(span[videoId], {
                        width: `${currentProgress}%`,
                        backgroundColor: 'white',
                    })
                }
            },
            onComplete: () => {
                if(isPlaying){
                    gsap.to(videoDivRef.current[videoId], {
                        width: '8px'
                    })
                    gsap.to(span[videoId], {
                        backgroundColor: '#afafaf'
                    })
                }
            }
        })

        if(videoId === 0){
            anim.restart();
        }

        const animUpdate = () => {
            anim.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration)
        }

        if (isPlaying) {
            gsap.ticker.add(animUpdate);
        } else {
            gsap.ticker.remove(animUpdate);
        }
      }
    }, [videoId, startPlay]);

    const handleProcess =(type, i)=> {
        switch (type) {
            case 'video-end':
                setVideo((pre) => ({...pre, isEnd: true, videoId: i + 1}))
                break;
            case 'video-last':
                setVideo((pre) => ({...pre, isLastVideo: true}))
                break;
            case 'video-reset':
                setVideo((pre) => ({...pre, isLastVideo: false, videoId: 0}))
                break;
            case 'play':
                setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
                break;
            case 'pause':
                setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
                break;
            default:
                return video;
        }
    }
    
  return (
    <div id='slider-con' className='w-full flex flex-col justify-between items-center mt-16'>
        <div className="w-full flex items-center">
            {hightlightsSlides.map((list, i) => (
                <div key={list.id} id='slider' className='w-full sm:pr-20 pr-10'>
                    <div className="video-carousel_container md:pr-[100px]">
                        <div className="w-full h-full flex-center rounded-none md:rounded-3xl overflow-hidden bg-black">
                            <video id='video' playsInline={true} preload="auto"
                            muted
                            className={`${list.id === 2 && 'translate-x-44'} pointer-events-none`}
                            ref={(el) => (videoRef.current[i] = el)}
                            onPlay={() => {
                                setVideo((prevVideo) => ({...prevVideo, isPlaying:true}))
                            }}
                            onEnded={() => 
                                i !== 3 ? handleProcess('video-end', i)
                                : handleProcess('video-last')
                            }
                            onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                            >
                                <source src={list.video} type='video/mp4' />
                            </video>
                        </div>

                        <div className="absolute top-12 left-[5%] z-10">
                            {list.textLists.map((text) => (
                                <p key={text} className="md:text-3xl text-xl font-semibold">
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div id='video-control' className="flex-center mt-16 translate-y-[100px] border-0">
            <div id='progress-con' className="scale-0 py-5 px-7 size-[52px] bg-gray-300 backdrop-blur rounded-full translate-x-[34px] flex-center">
                {videoRef.current.map((_, i) => (
                    <span key={i} ref={(el) => (videoDivRef.current[i] = el)} className='mx-2 size-2 bg-gray-200 rounded-full relative cursor-pointer'>
                        <span className='absolute h-full w-full rounded-full' ref={(el) => (videoSpanRef.current[i] = el)} />
                    </span>
                ))}
            </div>
            <button
            id='control-btn'
            className='control-btn flex-center translate-x-[-36px] scale-0' 
            onClick={isLastVideo ? () => handleProcess('video-reset') 
            : !isPlaying? () => handleProcess('play') 
            : () => handleProcess('pause')}>
                <img className='w-5' src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastVideo ? "Replay button" : !isPlaying ? 'Play button' : "Pause button"} />
            </button>
        </div>
    </div>
  )
}

export default VideoCarousel;