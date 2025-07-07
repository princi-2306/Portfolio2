import { useEffect, useRef} from 'react';
import gsap from 'gsap';
import img from '../assets/profile.jpg'

function PreLoader() {
    const loader = useRef(null);
    const image = useRef(null);
    const ring = useRef(null);
    const pageWrapper = useRef(null);
    const textappear = useRef(null);
    const textdisappear = useRef(null);

    useEffect(() => {

        gsap.fromTo(loader.current, 
            { opacity: 0, y: 20 }, 
            { duration: 1, opacity: 1, y: 0, ease: "power2.inOut" }
        );
        // Animate the ring for 2 seconds
        gsap.to(ring.current, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: "linear"
        });

        // After 2 seconds, fade out the ring and fade in the image
        gsap.timeline()
            .to(ring.current, { opacity: 0, duration: 0.5, delay: 2 })
            .fromTo(image.current, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
            );
        
        gsap.to(pageWrapper.current, {
            opacity: 0,
            duration: 0.5,
            delay: 4,
            onComplete: () => {
                pageWrapper.current.style.display = 'none';
            }
        });

        // text appear
        gsap.timeline()
            .to(textappear.current, { opacity: 1, duration: 0.5, delay: 2, ease: "power2.inOut" })
            .fromTo(image.current, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
            );

        // text disappear
        gsap.timeline()
            .to(textdisappear.current, { opacity: 0, duration: 0.5, delay: 2, ease: "power2.inOut" })
            .fromTo(image.current, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
            );
        
    }, []);

    return (
        <div ref={pageWrapper} className='flex justify-center items-center h-screen'>
            <div ref={loader} className="loader">
                <div ref={textdisappear} className="loader-text absolute m-5 text-2xl top-56">Loading...</div>
                <div ref={ring} className="absolute ring"></div>
                <div>
                  <img ref={image} className='w-80 h-80 rounded-full' src={img} alt="Loader" />
                  <div ref={textappear} className='opacity-0 text-center font-semibold text-3xl m-2'>WELCOME </div>
                </div>
            </div>
        </div>
    );
}

export default PreLoader;