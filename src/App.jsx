import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './assets/Navbar';
import About from './Components/About';
import About2 from './Components/About2';
import Skill from './Components/Skill';
import Skill2 from './Components/Skill2';
import Project from './Components/Project';
import Project2 from './Components/Project2';
import Contact from './Components/Contact';
import Contact2 from './Components/Contact2';
import PreLoader from './assets/PreLoader';
import cursor from './assets/cursor.svg';

function App() {
    // const mouseRef = useRef(null);
    const content = useRef(null);
    const preLoader = useRef(null);
    // const skillRef = useRef(null);
    
    useEffect(() => {
        // Initially hide the content
        gsap.set(content.current, { opacity: 0, display: 'none' });

        // Show the preloader immediately
        gsap.to(preLoader.current, { opacity: 1, duration: 0.5 });

        // After 4 seconds, hide the preloader and show the content
        gsap.timeline()
            .to(preLoader.current, {
                opacity: 0,
                duration: 0.5,
                delay: 4,
                onComplete: () => {
                    preLoader.current.style.display = 'none';
                }
            })
            .to(content.current, {
                opacity: 1,
                duration: 0.5,
                display: 'block'
            }, "-=0.5"); // Overlap the animations for a smooth transition
        
        // gsap.timeline().to(content, {
        //     scrollTrigger: skillRef,
        //     toggleActions: 'play none none reverse',
        //     duration: 0.5,
        //     ease: 'power3.out'
        // })
    }, []);

    return (
        <div style={{ cursor: `url(${cursor}), auto` }} className='bg-black text-white border-none overflow-hidden'>
            <div ref={preLoader}>
                <PreLoader />
            </div>
            <div ref={content} className='text-white'>
                <div className='fixed z-30 bg-black w-full top-0'>
                 <Navbar />
                </div>
                
                <div id='about1' className='lg:hidden'>
                  <About />
                </div>
                <div id='about2' className='hidden lg:block'>
                  <About2 />
                </div>

                <div id='skill1' className='lg:hidden'>
                  <Skill />
                </div>
                <div id='skill2' className='hidden lg:block'>
                  <Skill2 />
                </div>

                <div id='project1' className='lg:hidden'>
                  <Project />  
                </div>
                <div id='project2' className='hidden lg:block'>
                  <Project2 />  
                </div>

                <div id='contact1' className='lg:hidden'>
                  <Contact />
                </div>
                <div id='contact2' className='hidden lg:block'>
                  <Contact2 />
                </div>
                
            </div>
          
        </div>
    );
}

export default App;
